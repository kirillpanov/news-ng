import { TestBed } from "@angular/core/testing";

import { NewsApiDataService } from "./news-api.service";
import { HttpClient } from "@angular/common/http";

describe("NewsApiDataService", () => {
    const httpStub: any = jasmine.createSpyObj("HttpClient", ["get"]);

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                NewsApiDataService,
                {
                    provide: HttpClient,
                    useValue: httpStub
                }
            ]
        })
    );

    it("should be created", () => {
        const service: NewsApiDataService = TestBed.get(NewsApiDataService);
        expect(service).toBeTruthy();
    });
});
