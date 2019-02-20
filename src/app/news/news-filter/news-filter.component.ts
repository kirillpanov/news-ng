import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-news-filter",
    templateUrl: "./news-filter.component.html",
    styleUrls: ["./news-filter.component.scss"]
})
export class NewsFilterComponent {
    public keyWord: string = "";

    @Output() public filter: EventEmitter<string> = new EventEmitter();

    public onFilter(): void {
        this.filter.emit(this.keyWord);
    }
}
