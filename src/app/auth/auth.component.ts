import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../_shared/_service/api.service";
import {UserService} from "../_shared/_service/user.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    authType = '';
    title = '';
    isSubmitting = false;
    authForm: FormGroup;
    errors = new Error();

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private userServer: UserService) {
        this.authForm = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.route.url.subscribe(data => {
            console.info(data);
            this.authType = data[data.length - 1].path;

            if (this.authType === 'login') {
                this.title = 'Sign in';
            } else {
                this.title = 'Sign up';
                this.authForm.addControl('username', new FormControl('', Validators.required));
            }
        });
    }

    submit() {
        this.errors = new Error();
        this.isSubmitting = true;
        let credentials = this.authForm.value;
        this.userServer.attemptAuth(this.authType, credentials)
            .subscribe(data => {
                this.router.navigateByUrl('/');
            }, error => {
                this.errors = error;
                this.isSubmitting = false;
            });
        console.log(credentials);
    }

}
