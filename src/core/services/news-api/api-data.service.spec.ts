import { TestBed } from "@angular/core/testing";

import { NewsApiDataService } from "./news-api.service";

describe("ApiServiceService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: NewsApiDataService = TestBed.get(NewsApiDataService);
        expect(service).toBeTruthy();
    });
});
