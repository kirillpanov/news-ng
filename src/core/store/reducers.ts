import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from "@ngrx/store";
import { newsReducer } from "./news/index";

export interface State {
    news: any;
}

export const reducers: ActionReducerMap<State> = {
    news: newsReducer
};

export const getNewsState = createFeatureSelector<State>("news");
