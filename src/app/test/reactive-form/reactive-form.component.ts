import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    authForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.authForm = fb.group({
            'email': ['admin', Validators.required],
            'password': ['pwd', Validators.required]
        });
    }

    ngOnInit() {

    }

    submit() {
        const credentials = this.authForm.value;
        console.info(credentials);
    }

}
