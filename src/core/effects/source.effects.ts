// import { NewsAction } from "./../store/news/news.actions";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, tap } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { ApiDataService } from "../services/index";
import { NewsActions } from "../store/index";

@Injectable()
export class SourceEffects {
    private actions$: Actions;
    private apiDataService: ApiDataService;

    @Effect()
    public fetchSources$: Observable<
        | NewsActions.FetchSourcesSuccessAction
        | NewsActions.FetchSourcesFailAction
    >;

    @Effect()
    public fetchNews$: Observable<
        | NewsActions.FetchArticlesSuccessAction
        | NewsActions.FetchArticlesFailAction
    >;

    constructor(actions$: Actions, apiDataService: ApiDataService) {
        this.actions$ = actions$;
        this.apiDataService = apiDataService;

        this.fetchSources$ = this.actions$.pipe(
            ofType(NewsActions.FETCH_SOURCES),
            switchMap(() => this.apiDataService.getSources()),
            map(
                ({ sources }) =>
                    new NewsActions.FetchSourcesSuccessAction(sources)
            ),
            catchError(() => of(new NewsActions.FetchSourcesFailAction()))
        );

        this.fetchNews$ = this.actions$.pipe(
            ofType(NewsActions.SELECT_SOURCE),
            map((action: NewsActions.SelectSourceAction) => action.payload),
            switchMap(id => this.apiDataService.getNewsForSource(id)),
            map(
                ({ articles }) =>
                    new NewsActions.FetchArticlesSuccessAction(articles)
            ),
            catchError(() => of(new NewsActions.FetchArticlesFailAction()))
        );
    }
}
