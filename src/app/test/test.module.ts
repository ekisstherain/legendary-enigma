import {ModuleWithProviders, NgModule} from "@angular/core";
import {SharedModule} from "app/_shared";
import {RouterModule} from "@angular/router";
import {TestComponent} from "./test.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";

const testRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'test',
        component: TestComponent,
        children: [
            {
                path: '',
                component: ReactiveFormComponent
            }
        ]
    }
]);

@NgModule({
    declarations: [
        TestComponent,
        ReactiveFormComponent
    ],
    imports: [
        SharedModule,
        testRouting
    ],
    providers: []
})
export class TestModule {
}
