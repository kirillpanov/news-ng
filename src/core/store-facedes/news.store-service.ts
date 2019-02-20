import { ApiDataModels } from "./../services/index";
import { State, NewsActions } from "./../store/index";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { NewsSelectors } from "../store/news";
import { filter, tap, map } from "rxjs/operators";

@Injectable()
export class NewsStoreService {
    private store: Store<State>;
    private sources$: Observable<Array<ApiDataModels.Source>>;
    private articles$: Observable<Array<ApiDataModels.Article>>;

    constructor(store: Store<State>) {
        this.store = store;
        this.sources$ = this.store.select(NewsSelectors.selectSources);
        this.articles$ = this.store.select(NewsSelectors.selectArticles);
    }

    public getSources(): Observable<Array<ApiDataModels.Source>> {
        return this.sources$.pipe(
            tap(sources => {
                if (!sources.length) {
                    this.store.dispatch(new NewsActions.FetchSourcesAction());
                }
            }),
            filter(sources => !!sources.length)
        );
    }

    public getArticles(): Observable<Array<ApiDataModels.Article>> {
        return combineLatest(this.sources$, this.articles$).pipe(
            tap(([sources, articles]) => {
                if (!articles.length && !sources.length) {
                    this.store.dispatch(new NewsActions.FetchAllArticles());
                }
            }),
            map(([_, articles]) => articles),
            filter(articles => !!articles)
        );
    }

    public selectSource(id: string, page?: number): void {
        this.store.dispatch(new NewsActions.SelectSourceAction(id, page));
    }
}
