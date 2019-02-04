import { Observable, combineLatest } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { getSourcesUrl } from "../utils/index";
import { API_KEY } from "./config/index";
import { getNewsUrl } from "../utils/get-url.util";

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
    public getSources(): Observable<any> {
        return this.http.get(this.sourcesUrl);
    }

    /*
     * Return combined stream for selected sources
     *
     * @param: sources: Array<any>
     */
    public getNewsForSource(sources: Array<any>): Observable<any> {
        const sources$: Array<Observable<any>> = sources.map(({ id }) => {
            const url: string = getNewsUrl(this.apiKey, id);
            return this.http.get(url);
        });

        return combineLatest(...sources$);
    }
}
