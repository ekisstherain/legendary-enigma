import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {NoAuthGuardService} from "../_shared/_service/no-auth-guard.service";

const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'login',
        component: AuthComponent,
        canActivate: [NoAuthGuardService]
    },
    {
        path: 'register',
        component: AuthComponent,
        canActivate: [NoAuthGuardService]
    },
    {
        path: 'logout',
        component: AuthComponent
    }
]);

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        authRouting
    ],
    providers: [
        NoAuthGuardService
    ]
})
export class AuthModule {
}
