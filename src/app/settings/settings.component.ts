import {Component, OnInit} from '@angular/core';
import {User} from "../_shared/_model/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../_shared/_service/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    user: User = new User();
    settingsForm: FormGroup;
    errors = {};
    isSubmitting = false;


    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        // create form group using the form builder
        this.settingsForm = fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        });
    }

    ngOnInit() {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        this.settingsForm.patchValue(this.user);

    }

    submit() {
        this.isSubmitting = true;
        Object.assign(this.user, this.settingsForm.value);

        this.userService.updateProfile(this.user)
            .subscribe(data => {
                console.info(data.username);
                console.info(`/profile/${data.username}`);
                this.router.navigateByUrl(`/profiles/${data.username}`).catch(error => {
                    this.isSubmitting = false;
                    console.error(error);
                });
            }, error => {
                this.errors = error;
                this.isSubmitting = false;
            });
    }

    logout() {
        this.userService.cleanAuth();
        this.router.navigateByUrl('/login');
    }

}
