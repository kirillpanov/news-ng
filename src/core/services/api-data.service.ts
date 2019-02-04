import { Observable, combineLatest } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { getSourcesUrl, getNewsUrl } from "../utils/index";
import { API_KEY } from "./config/index";
import { Article, Source } from "./models/index";

@Injectable()
export class ApiDataService {
    private apiKey: string = API_KEY;
    private http: HttpClient;
    private sources: any;
    private sourcesUrl: string;

    constructor(http: HttpClient) {
        this.http = http;
        this.sourcesUrl = getSourcesUrl(this.apiKey);
    }

    /*
     * Return sources stream
     */
    public getSources(): Observable<Source> {
        return this.http.get(this.sourcesUrl) as Observable<Source>;
    }

    /*
     * Return combined stream for selected sources
     *
     * @param: sources: Array<any>
     */
    public getNewsForSource(
        sources: Array<Source>
    ): Observable<Array<Article>> {
        const sources$: Array<Observable<Article>> = sources.map(({ id }) => {
            const url: string = getNewsUrl(this.apiKey, id);
            return this.http.get(url) as Observable<Article>;
        });

        return combineLatest(...sources$);
    }
}
