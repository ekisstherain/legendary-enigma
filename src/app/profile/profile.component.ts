import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../_shared/_service/user.service";
import {Profile} from "../_shared/_model/profile.model";
import {User} from "../_shared/_model/user.model";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: Profile;
    currentUser: User;
    isUser: boolean;

    constructor(private route: ActivatedRoute, private userService: UserService) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: { profile: Profile }) => {
            console.info(data);
            this.profile = data.profile;
        });

        this.userService.currentUser.subscribe((data: User) => {
            this.currentUser = data;
            this.isUser = this.currentUser.username === this.profile.username;
        });
    }

    onToggleFollowing (following: boolean) {
        this.profile.following = following;
    }

}
