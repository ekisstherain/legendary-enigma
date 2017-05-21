import {Injectable} from '@angular/core';
import {ProfileService} from "../_service/profile.service";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Profile} from "../_model/profile.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfileResolverService implements Resolve<Profile> {


    constructor(private profileService: ProfileService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> | Promise<Profile> | Profile {
        return this.profileService.get(route.params['username']).catch(error => {
            console.error(error);
            return this.router.navigateByUrl('/');
        });
    }
}
