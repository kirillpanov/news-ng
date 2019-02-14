import { Action } from "@ngrx/store";
import { ApiDataModels } from "../../services/index";

export const GET_SOURCES: string = "[NEWS]GET_SOURCES";
export const GET_SOURCES_SUCCESS: string = "[NEWS]GET_SOURCES_SUCCESS";
export const FETCH_SOURCES: string = "[NEWS]FETCH_SOURCES";
export const FETCH_SOURCES_SUCCESS: string = "[NEWS]FETCH_SOURCES_SUCCESS";
export const FETCH_SOURCES_FAIL: string = "[NEWS]FETCH_SOURCES_FAIL";
export const SELECT_SOURCE: string = "[NEWS]SELECT_SOURCE";
export const FETCH_ARTICLES_SUCCESS: string = "[NEWS]FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAIL: string = "[NEWS]FETCH_ARTICLES_FAIL";

export class GetSourcesAction implements Action {
    readonly type: string = GET_SOURCES;
}

export class GetSourcesSuccessAction implements Action {
    readonly type: string = GET_SOURCES_SUCCESS;
}

export class FetchSourcesAction implements Action {
    readonly type: string = FETCH_SOURCES;
}

export class FetchSourcesSuccessAction implements Action {
    readonly type: string = FETCH_SOURCES_SUCCESS;
    public payload: Array<ApiDataModels.Source>;

    constructor(payload: Array<ApiDataModels.Source>) {
        this.payload = payload;
    }
}

export class FetchSourcesFailAction implements Action {
    readonly type: string = FETCH_SOURCES_FAIL;
}

export class SelectSourceAction implements Action {
    readonly type: string = SELECT_SOURCE;
    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

export class FetchArticlesSuccessAction implements Action {
    readonly type: string = FETCH_ARTICLES_SUCCESS;
    public payload: Array<ApiDataModels.Article>;

    constructor(payload: Array<ApiDataModels.Article>) {
        this.payload = payload;
    }
}

export class FetchArticlesFailAction implements Action {
    readonly type: string = FETCH_ARTICLES_FAIL;
}

export type NewsAction =
    | FetchSourcesSuccessAction
    | GetSourcesAction
    | GetSourcesSuccessAction
    | FetchSourcesAction
    | FetchSourcesFailAction;
