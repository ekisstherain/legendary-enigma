import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "../_shared/_service/auth-guard.service";
import {SettingsComponent} from "./settings.component";

const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuardService]
    }
]);

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        SharedModule,
        routing
    ],
    providers: []
})

export class SettingsModule {
}
