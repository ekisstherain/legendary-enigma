import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.userService.isAuthenticated.take(1).map(res => {
            if (!res) {
                // 没有授权，跳转到login page
                console.info('redirect to login page');
                this.router.navigateByUrl('/login');
            }
            return res;
        });
    }

}
