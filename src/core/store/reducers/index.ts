import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { Article, Source } from "../../services/models";

export interface State {
    sources: Array<Source>;
    articles: Array<Article>;
}

export const reducers: ActionReducerMap<State> = {} as ActionReducerMap<State>;

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? []
    : [];
