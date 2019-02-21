import { newsReducer, initialState, NewsState } from "./news.reducers";
import * as NewsActions from "./news.actions";

describe("newsReducer", () => {
    let action: NewsActions.NewsAction;
    let result: NewsState;
    let expected: NewsState;
    let state: NewsState;

    beforeEach(() => (state = initialState));

    it("should return initial state by default", () => {
        action = {} as NewsActions.NewsAction;
        result = newsReducer(undefined, action);
        expected = initialState;
        expect(result).toEqual(expected);
    });

    it("should return state on GET_SOURCES action", () => {
        action = new NewsActions.GetSourcesAction();
        result = newsReducer(state, action);
        expected = initialState;
        expect(result).toEqual(expected);
    });

    it("should return state with empty articles on SELECT_SOURCE action", () => {
        action = new NewsActions.SelectSourceAction("id");
        result = newsReducer(state, action);
        expected = { ...initialState, articles: [] };
        expect(result).toEqual(expected);
    });

    it("should return state with sources on FETCH_SOURCES_SUCCESS action", () => {
        const fakeSources: Array<any> = [{ id: "id", name: "name" }];
        action = new NewsActions.FetchSourcesSuccessAction(fakeSources);
        result = newsReducer(state, action);
        expected = { ...initialState, sources: fakeSources };
        expect(result).toEqual(expected);
    });

    it("should return state with sources on FETCH_SOURCES_SUCCESS action", () => {
        const fakeArticles: Array<any> = [{ id: "id", name: "name" }];
        action = new NewsActions.FetchArticlesSuccessAction(fakeArticles);
        result = newsReducer(state, action);
        expected = { ...initialState, articles: fakeArticles };
        expect(result).toEqual(expected);
    });
});
