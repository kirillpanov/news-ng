import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ApiDataModels } from "../../../core/index";

@Component({
    selector: "app-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent {
    @Output()
    public select: EventEmitter<number> = new EventEmitter();

    @Output()
    public filter: EventEmitter<string> = new EventEmitter();

    @Input()
    public sources: Array<ApiDataModels.Source> = [];

    public onSelect(id: number): void {
        this.select.emit(id);
    }

    public onFilter(keyWord: string): void {
        this.filter.emit(keyWord);
    }

    public onByMeSelect(): void {
        console.log("by me");
    }
}
