import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
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
