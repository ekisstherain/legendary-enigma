import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "../_shared/_service/auth-guard.service";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    }
]);

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        homeRouting
    ],
    providers: []
})
export class HomeModule {
}
