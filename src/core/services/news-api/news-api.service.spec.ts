import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

import { NewsApiDataService } from "./news-api.service";

describe("NewsApiDataService", () => {
    const httpStub: any = jasmine.createSpyObj("HttpClient", ["get"]);
    let service: NewsApiDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NewsApiDataService,
                {
                    provide: HttpClient,
                    useValue: httpStub
                }
            ]
        });
        service = TestBed.get(NewsApiDataService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should call http.get on getSources call", () => {
        service.getSources();
        expect(httpStub.get).toHaveBeenCalled();
    });

    it("should call http.get on getNewsForSource call", () => {
        service.getNewsForSource("id", 2);
        expect(httpStub.get).toHaveBeenCalled();
    });

    it("should call http.get on getAllNews call", () => {
        service.getAllNews();
        expect(httpStub.get).toHaveBeenCalled();
    });
});
