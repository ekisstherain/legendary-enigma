import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './_directive/show-authed.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        ListErrorsComponent,
        ShowAuthedDirective
    ],
    declarations: [ListErrorsComponent, ShowAuthedDirective]
})
export class SharedModule {}
