import {Component, OnInit} from '@angular/core';
import {User} from "../../_model/user.model";
import {UserService} from "../../_service/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private currentUser: User;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

}
