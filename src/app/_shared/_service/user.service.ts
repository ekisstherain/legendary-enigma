import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../_model/user.model";
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/distinctUntilChanged";

@Injectable()
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>(new User());
    public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(private apiService: ApiService) { }

    setAuth(user: User) {
        // Set current user data into observable
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    attemptAuth(type, credentials): Observable<User> {
        const route = type === 'login' ? 'login' : '';
        return this.apiService.post(`user/${route}`, {user: credentials})
            .map(data => {
                this.setAuth(data.user);
                return data;
            });
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }
}
