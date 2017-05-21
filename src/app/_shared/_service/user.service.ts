import {Injectable} from "@angular/core";
import {User} from "../_model/user.model";
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/distinctUntilChanged";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {JwtService} from "./jwt.service";

@Injectable()
export class UserService {

    private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
    public currentUser: Observable<User> = this.currentUserSubject.asObservable().distinctUntilChanged();

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(private apiService: ApiService, private jwtServer: JwtService) {
    }

    setAuth(user: User) {
        // Set current user data into observable
        this.jwtServer.saveToken(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    attemptAuth(type, credentials): Observable<User> {
        if (type === 'login') {
            return this.apiService.get(`/login`)
                .map(data => {
                    console.info(data);
                    this.setAuth(data);
                    return data;
                });
        } else {
            return this.apiService.post(`/users`, credentials)
                .map(data => {
                    this.setAuth(data.user);
                    return data;
                });
        }
    }

    // Verify JWT in localStorage with server & load user's info.
    // This runs once on application startup.
    initAuth() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtServer.getToken()) {
            this.apiService.get('/login')
                .subscribe(data => {
                    this.setAuth(data);
                }, error => {
                    this.cleanAuth();
                });
        } else {
            // Remove any potential remnants of previous auth states
            this.cleanAuth();
        }
    }

    cleanAuth() {
        // Remove JWT from localStorage
        this.jwtServer.destroyToken();
        this.currentUserSubject.next(new User());
        this.isAuthenticatedSubject.next(false);
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    updateProfile(user: User): Observable<User> {
        return this.apiService.put('/login', user)
            .map((data: User) => {
                this.currentUserSubject.next(data);
                return data;
            });
    }
}
