import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "../_shared/_service/auth-guard.service";
import {ProfileComponent} from "./profile.component";
import {ProfileResolverService} from "../_shared/_resolver/profile-resolver.service";

const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'profiles/:username',
        component: ProfileComponent,
        canActivate: [AuthGuardService],
        resolve: {
            profile: ProfileResolverService
        }
    }
]);

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        SharedModule,
        routing
    ],
    providers: [ProfileResolverService]
})

export class ProfileModule {
}
