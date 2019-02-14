import { Observable, Subject, combineLatest } from "rxjs";
import { NewsStoreService, ApiDataModels } from "./../../../core/index";
import { Component } from "@angular/core";
import { startWith } from "rxjs/operators";

@Component({
    selector: "app-news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.scss"]
})
export class NewsComponent {
    private newsStoreService: NewsStoreService;
    private filterSubject: Subject<string> = new Subject();
    private selectedSourceId: string;

    public sources$: Observable<Array<ApiDataModels.Source>>;
    public articles$: Observable<Array<ApiDataModels.Article>>;

    constructor(newsStoreService: NewsStoreService) {
        this.newsStoreService = newsStoreService;
        this.sources$ = this.newsStoreService.getSources();
        this.articles$ = this.getArticles();
    }

    public onSelectSource(id: string) {
        this.selectedSourceId = id;
        this.newsStoreService.selectSource(id);
    }

    public onFilter(keyWord: string) {
        this.filterSubject.next(keyWord);
    }

    private getArticles(): Observable<Array<ApiDataModels.Article>> {
        const articles$: Observable<
            Array<ApiDataModels.Article>
        > = this.newsStoreService.getArticles();
        const filter$: Observable<
            string
        > = this.filterSubject.asObservable().pipe(startWith(""));
        return combineLatest(
            articles$,
            filter$,
            (articles: Array<ApiDataModels.Article>, keyWord: string) =>
                articles.filter(article => article.title.includes(keyWord))
        );
    }
}
