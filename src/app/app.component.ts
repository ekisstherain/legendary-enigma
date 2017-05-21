import {Component, OnInit} from '@angular/core';
import {UserService} from "./_shared/_service/user.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.initAuth();
    }
}
