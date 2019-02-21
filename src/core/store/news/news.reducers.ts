import {
    GET_SOURCES,
    FETCH_SOURCES_SUCCESS,
    FETCH_ARTICLES_SUCCESS,
    SELECT_SOURCE,
    NewsAction,
    FetchSourcesSuccessAction,
    FetchArticlesSuccessAction
} from "./news.actions";
import { Article, Source } from "../../services/models";

export interface NewsState {
    sources: Array<Source>;
    selectedSources: Array<Source>;
    articles: Array<Article>;
}

export const initialState: NewsState = {
    sources: [],
    selectedSources: [],
    articles: []
};

export function newsReducer(
    state = initialState,
    action: NewsAction
): NewsState {
    switch (action.type) {
        case GET_SOURCES: {
            return {
                ...state
            };
        }

        case SELECT_SOURCE: {
            return {
                ...state,
                articles: []
            };
        }

        case FETCH_SOURCES_SUCCESS: {
            const sources: Array<Source> = (action as FetchSourcesSuccessAction)
                .payload;
            return {
                ...state,
                sources
            };
        }

        case FETCH_ARTICLES_SUCCESS: {
            const articles: Array<
                Article
            > = (action as FetchArticlesSuccessAction).payload;
            return {
                ...state,
                articles
            };
        }

        default: {
            return state;
        }
    }
}
