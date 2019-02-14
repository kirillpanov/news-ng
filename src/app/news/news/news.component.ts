import { Observable } from "rxjs";
import { NewsStoreService, ApiDataModels } from "./../../../core/index";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.scss"]
})
export class NewsComponent {
    private newsStoreService: NewsStoreService;
    public sources$: Observable<Array<ApiDataModels.Source>>;
    constructor(newsStoreService: NewsStoreService) {
        this.newsStoreService = newsStoreService;
        this.sources$ = this.newsStoreService.getSources();
    }

    public onSelectSource(id: string) {
        this.newsStoreService.selectSource(id);
    }
}
