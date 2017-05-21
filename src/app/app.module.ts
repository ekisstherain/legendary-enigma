import {BrowserModule} from "@angular/platform-browser";
import {ModuleWithProviders, NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SharedModule, HeaderComponent, FooterComponent} from "./_shared";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {TestModule} from "./test/test.module";
import {AuthModule} from "./auth/auth.module";
import {ApiService} from "./_shared/_service/api.service";
import {UserService} from "./_shared/_service/user.service";
import {JwtService} from "./_shared/_service/jwt.service";
import {AuthGuardService} from "./_shared/_service/auth-guard.service";
import {SettingsModule} from "./settings/settings.module";
import {ProfileModule} from "./profile/profile.module";
import {ProfileService} from "./_shared/_service/profile.service";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HomeModule,
        rootRouting,
        TestModule,
        AuthModule,
        SettingsModule,
        ProfileModule
    ],
    providers: [
        ApiService,
        UserService,
        JwtService,
        AuthGuardService,
        ProfileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
