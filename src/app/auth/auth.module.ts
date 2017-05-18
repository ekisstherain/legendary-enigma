import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";

const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'register',
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
    providers: []
})
export class AuthModule {
}
