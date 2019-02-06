import { Component, Input } from "@angular/core";
import { ApiDataModels } from "../../../core/index";

@Component({
    selector: "app-source-select-item",
    templateUrl: "./source-select-item.component.html",
    styleUrls: ["./source-select-item.component.scss"]
})
export class SourceSelectItemComponent {
    @Input()
    public source: ApiDataModels.Source;
}
