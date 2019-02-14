import { Observable, of } from "rxjs";
import { map, switchMap, catchError, tap } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { NewsApiDataService } from "../services/index";
import { NewsActions } from "../store/index";

@Injectable()
export class SourceEffects {
    private actions$: Actions;
    private newsApiDataService: NewsApiDataService;

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

    @Effect()
    public fetchAllNews$: Observable<
        | NewsActions.FetchArticlesSuccessAction
        | NewsActions.FetchArticlesFailAction
    >;

    constructor(actions$: Actions, newsApiDataService: NewsApiDataService) {
        this.actions$ = actions$;
        this.newsApiDataService = newsApiDataService;

        this.fetchSources$ = this.actions$.pipe(
            ofType(NewsActions.FETCH_SOURCES),
            switchMap(() => this.newsApiDataService.getSources()),
            map(
                ({ sources }) =>
                    new NewsActions.FetchSourcesSuccessAction(sources)
            ),
            catchError(() => of(new NewsActions.FetchSourcesFailAction()))
        );

        this.fetchNews$ = this.actions$.pipe(
            ofType(NewsActions.SELECT_SOURCE),
            map((action: NewsActions.SelectSourceAction) => ({
                id: action.id,
                page: action.page
            })),
            switchMap(({ id, page }) =>
                this.newsApiDataService.getNewsForSource(id, page)
            ),
            map(
                ({ articles }) =>
                    new NewsActions.FetchArticlesSuccessAction(articles)
            ),
            catchError(() => of(new NewsActions.FetchArticlesFailAction()))
        );

        this.fetchAllNews$ = this.actions$.pipe(
            ofType(NewsActions.FETCH_ALL_ARTICLES),
            switchMap(() => this.newsApiDataService.getAllNews()),
            map(
                ({ articles }) =>
                    new NewsActions.FetchArticlesSuccessAction(articles)
            ),
            catchError(() => of(new NewsActions.FetchArticlesFailAction()))
        );
    }
}
