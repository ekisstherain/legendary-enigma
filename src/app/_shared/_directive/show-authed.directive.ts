import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from "../_service/user.service";

@Directive({
    selector: '[showAuthed]'
})
export class ShowAuthedDirective implements OnInit {

    // show or not
    private condition: boolean;

    @Input()
    set showAuthed(condition: boolean) {
        this.condition = condition;
    }

    constructor(private templateRef: TemplateRef<any>,
                private userService: UserService,
                private viewContainer: ViewContainerRef) {
    }

    ngOnInit(): void {
        this.userService.isAuthenticated.subscribe(isAuthenticated => {
            // 授权了并且condition=true, 或者没有授权condition=false, 显示模板内容
            if ((isAuthenticated && this.condition) || (!isAuthenticated && !this.condition)) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }

}
