import {Component, Input, OnInit} from '@angular/core';
import {Error} from "../_model/error.model";

@Component({
    selector: 'app-list-errors',
    templateUrl: './list-errors.component.html',
    styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent implements OnInit {

    formattedErrors: Array<string> = [];

    @Input()
    set errors(errorList: Error) {
        this.formattedErrors = [];

        if (errorList.errors) {
            for (const error in errorList.errors) {
                this.formattedErrors.push(`${error} ${errorList.errors[error]}`);
            }
        }
    }

    get errorList() {
        return this.formattedErrors;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
