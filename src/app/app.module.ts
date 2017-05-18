import {BrowserModule} from "@angular/platform-browser";
import {ModuleWithProviders, NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SharedModule, HeaderComponent, FooterComponent} from "./_shared";
import {HomeModule} from "./home/home.module";
import {} from "./_shared/layout/header/header.component";
import {RouterModule} from "@angular/router";
import {TestModule} from "./test/test.module";
import {AuthModule} from "./auth/auth.module";

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
        AuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
