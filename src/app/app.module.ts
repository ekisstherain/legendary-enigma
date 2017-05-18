import {BrowserModule} from "@angular/platform-browser";
import {ModuleWithProviders, NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SharedModule, HeaderComponent, FooterComponent} from "./_shared";
import {HomeModule} from "./home/home.module";
import {} from "./_shared/layout/header/header.component";
import {RouterModule} from "@angular/router";

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
        rootRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
