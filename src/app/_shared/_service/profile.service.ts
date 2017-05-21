import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";
import {Profile} from "../_model/profile.model";

@Injectable()
export class ProfileService {

    constructor(private apiService: ApiService) {
    }

    get(username: string): Observable<Profile> {
        return this.apiService.get(`/profiles`)
            .map((data: Profile) => {
                console.info(data);
                return data;
            });
    }
}
