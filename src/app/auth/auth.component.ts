import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

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

    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
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
        this.isSubmitting = true;
        let credentials = this.authForm.value;
        console.log(credentials);
    }

}
