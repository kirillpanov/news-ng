import { State } from "../reducers";
import { NewsState } from "./news.reducers";
import { createSelector } from "@ngrx/store";

export const selectNews = (state: State) => state.news;

export const selectSources = createSelector(
    selectNews,
    (state: NewsState) => state.sources
);
