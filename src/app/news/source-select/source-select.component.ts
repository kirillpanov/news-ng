import {
    Component,
    Input,
    ElementRef,
    Output,
    EventEmitter
} from "@angular/core";
import { ApiDataModels } from "../../../core/index";

const DEFAULT_SELECTED_SOURCE: Partial<ApiDataModels.Source> = {
    name: "Please, select source"
};

@Component({
    selector: "app-source-select",
    templateUrl: "./source-select.component.html",
    styleUrls: ["./source-select.component.scss"],
    host: {
        "(document:click)": "onClick($event)"
    }
})
export class SourceSelectComponent {
    private elementRef: ElementRef;

    @Output()
    public select = new EventEmitter<number>();

    @Input()
    public sources: Array<ApiDataModels.Source> = [];

    public selectedSource: ApiDataModels.Source = DEFAULT_SELECTED_SOURCE as ApiDataModels.Source;

    public ifShowDropDown: boolean;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    public showDropDown(): void {
        console.log("show");
        this.ifShowDropDown = true;
    }

    public onClick(event) {
        if (
            !this.elementRef.nativeElement.contains(event.target) &&
            this.ifShowDropDown
        ) {
            this.ifShowDropDown = false;
        }
    }

    public selectSource(_, id: number): void {
        this.select.emit(id);
    }
}
