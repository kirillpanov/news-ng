import { GetArticlesResponse } from "../models/getArticlesResponse";
import { GetSourcesResponse } from "../models/getSourcesResponse";
import { Observable, combineLatest } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { getSourcesUrl, getNewsUrl, getAllNewsUrl } from "./utils/index";
import { API_KEY } from "./config/index";

@Injectable()
export class NewsApiDataService {
    private apiKey: string = API_KEY;
    private http: HttpClient;
    private sourcesUrl: string;

    constructor(http: HttpClient) {
        this.http = http;
        this.sourcesUrl = getSourcesUrl(this.apiKey);
    }

    /*
     * Return sources stream
     */
    public getSources(): Observable<GetSourcesResponse> {
        // return this.http.get("http://localhost:3000/news") as Observable<
        //     GetSourcesResponse
        // >;
        return this.http.get(this.sourcesUrl) as Observable<GetSourcesResponse>;
    }

    /*
     * Return combined stream for selected sources
     *
     * @param: sources: Array<any>
     */
    public getNewsForSource(
        id: string,
        page: number = 1
    ): Observable<GetArticlesResponse> {
        const url: string = getNewsUrl(this.apiKey, id, page);
        return this.http.get(url) as Observable<GetArticlesResponse>;
    }

    public getAllNews(page: number = 1): Observable<GetArticlesResponse> {
        const url: string = getAllNewsUrl(this.apiKey, page);
        return this.http.get(url) as Observable<GetArticlesResponse>;
    }
}
