import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { ApiDataModels } from "../../../core";

@Component({
    selector: "app-news-line-item",
    templateUrl: "./news-line-item.component.html",
    styleUrls: ["./news-line-item.component.scss"]
})
export class NewsLineItemComponent {
    @Input()
    public article: ApiDataModels.Article;

    public defaultUrl: string =
        "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";
}
