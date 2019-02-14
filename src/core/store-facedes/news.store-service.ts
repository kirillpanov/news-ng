import { ApiDataModels } from "./../services/index";
import { State, NewsActions } from "./../store/index";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { NewsSelectors } from "../store/news";
import { filter, tap } from "rxjs/operators";

@Injectable()
export class NewsStoreService {
    private store: Store<State>;
    private sources$: Observable<Array<ApiDataModels.Source>>;

    constructor(store: Store<State>) {
        this.store = store;
        this.sources$ = this.store.select(NewsSelectors.selectSources);
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

    public selectSource(id: string): void {
        this.store.dispatch(new NewsActions.SelectSourceAction(id));
    }
}
