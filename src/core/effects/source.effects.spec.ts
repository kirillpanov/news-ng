import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { hot, cold } from "jasmine-marbles";
import { Observable } from "rxjs";

import { SourceEffects } from "./source.effects";
import { NewsActions } from "../store/index";
import { NewsApiDataService } from "./../services/news-api/news-api.service";
import { TestColdObservable } from "jasmine-marbles/src/test-observables";

describe("My Effects", () => {
    let effects: SourceEffects;
    let actions: Observable<any>;
    const newsApiDataServiceStub: any = jasmine.createSpyObj(
        "NewsApiDataService",
        ["getSources", "getNewsForSource", "getAllNews"]
    );

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SourceEffects,
                {
                    provide: NewsApiDataService,
                    useValue: newsApiDataServiceStub
                },
                provideMockActions(() => actions)
            ]
        });

        effects = TestBed.get(SourceEffects);
    });

    describe("fetchSources$ effect", () => {
        let action: NewsActions.FetchSourcesAction;

        beforeEach(() => {
            action = new NewsActions.FetchSourcesAction();
        });

        it(" should dispatch FetchSourcesSuccessAction with articles from response", () => {
            const fakeSources: Array<any> = [
                {
                    id: "id",
                    name: "name"
                }
            ];
            const completion: NewsActions.FetchSourcesSuccessAction = new NewsActions.FetchSourcesSuccessAction(
                fakeSources
            );
            const expected: TestColdObservable = cold("--b", { b: completion });

            newsApiDataServiceStub.getSources.and.returnValue(
                cold("r", { r: { sources: fakeSources } })
            );
            actions = hot("--a-", { a: action });

            expect(effects.fetchSources$).toBeObservable(expected);
        });

        it(" should dispatch FetchSourcesFailAction on request fail", () => {
            const completion: NewsActions.FetchSourcesFailAction = new NewsActions.FetchSourcesFailAction();
            const expected: TestColdObservable = cold("--(b|)", {
                b: completion
            });

            newsApiDataServiceStub.getSources.and.returnValue(cold("#"));
            actions = hot("--a-", { a: action });

            expect(effects.fetchSources$).toBeObservable(expected);
        });
    });

    describe("fetchNews$ effect", () => {
        let action: NewsActions.SelectSourceAction;
        const fakeId: string = "id";
        const fakePage: number = 2;

        beforeEach(() => {
            action = new NewsActions.SelectSourceAction(fakeId, fakePage);
        });

        it(" should dispatch FetchSourcesSuccessAction with sources from response", () => {
            const fakeArticles: Array<any> = [
                {
                    id: "id",
                    name: "name"
                }
            ];
            const completion: NewsActions.FetchArticlesSuccessAction = new NewsActions.FetchArticlesSuccessAction(
                fakeArticles
            );
            const expected: TestColdObservable = cold("--b", { b: completion });

            newsApiDataServiceStub.getNewsForSource.and.returnValue(
                cold("r", { r: { articles: fakeArticles } })
            );
            actions = hot("--a-", { a: action });

            expect(effects.fetchNews$).toBeObservable(expected);
        });

        it(" should dispatch FetchArticlesFailAction on request fail", () => {
            const completion: NewsActions.FetchArticlesFailAction = new NewsActions.FetchArticlesFailAction();
            const expected: TestColdObservable = cold("--(b|)", {
                b: completion
            });

            newsApiDataServiceStub.getNewsForSource.and.returnValue(cold("#"));
            actions = hot("--a-", { a: action });

            expect(effects.fetchNews$).toBeObservable(expected);
        });
    });

    describe("fetchAllNews$ effect", () => {
        let action: NewsActions.FetchAllArticles;

        beforeEach(() => {
            action = new NewsActions.FetchAllArticles();
        });

        it(" should dispatch FetchArticlesSuccessAction with sources from response", () => {
            const fakeArticles: Array<any> = [
                {
                    id: "id",
                    name: "name"
                }
            ];
            const completion: NewsActions.FetchArticlesSuccessAction = new NewsActions.FetchArticlesSuccessAction(
                fakeArticles
            );
            const expected: TestColdObservable = cold("--b", { b: completion });

            newsApiDataServiceStub.getAllNews.and.returnValue(
                cold("r", { r: { articles: fakeArticles } })
            );
            actions = hot("--a-", { a: action });

            expect(effects.fetchAllNews$).toBeObservable(expected);
        });

        it(" should dispatch FetchArticlesFailAction on request fail", () => {
            const completion: NewsActions.FetchArticlesFailAction = new NewsActions.FetchArticlesFailAction();
            const expected: TestColdObservable = cold("--(b|)", {
                b: completion
            });

            newsApiDataServiceStub.getAllNews.and.returnValue(cold("#"));
            actions = hot("--a-", { a: action });

            expect(effects.fetchAllNews$).toBeObservable(expected);
        });
    });
});
