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
    public select = new EventEmitter<string>();

    @Input()
    public sources: Array<ApiDataModels.Source> = [];

    public selectedSource: ApiDataModels.Source = DEFAULT_SELECTED_SOURCE as ApiDataModels.Source;

    public ifShowDropDown: boolean;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    public showDropDown(): void {
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

    public selectSource(_, id: string): void {
        this.selectedSource = this.sources.find(source => source.id === id);
        this.select.emit(id);
        this.ifShowDropDown = false;
    }
}
