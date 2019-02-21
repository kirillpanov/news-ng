import { TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";

import { NewsStoreService } from "./news.store-service";
import { BehaviorSubject } from "rxjs";

describe("NewsApiDataService", () => {
    const store: any = jasmine.createSpyObj("Store", ["select", "dispatch"]);
    const selectSubject: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    store.select.and.returnValue(selectSubject);
    let service: NewsStoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NewsStoreService,
                {
                    provide: Store,
                    useValue: store
                }
            ]
        });
        service = TestBed.get(NewsStoreService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should return sources if exist on getSources call", () => {
        let expectedSources: Array<any>;
        const sourcesFromStore: Array<any> = [{}];
        selectSubject.next(sourcesFromStore);

        service.getSources().subscribe(sources => (expectedSources = sources));
        expect(expectedSources).toEqual(sourcesFromStore);
    });

    it("should dispatch FetchSourcesAction if there no sources in store on getSources call", () => {
        const sourcesFromStore: Array<any> = [];
        selectSubject.next(sourcesFromStore);

        service.getSources();
        expect(store.dispatch).toHaveBeenCalled();
    });

    it("should return articles if exist on getArticles call", () => {
        let expectedArticles: Array<any>;
        const articlesFromStore: Array<any> = [{}];
        selectSubject.next(articlesFromStore);

        service
            .getArticles()
            .subscribe(sources => (expectedArticles = sources));
        expect(expectedArticles).toEqual(articlesFromStore);
    });

    it("should dispatch FetchAllArticles if there no articles or sources in store on getArticles call", () => {
        const articlesFromStore: Array<any> = [];
        selectSubject.next(articlesFromStore);

        service.getSources();
        expect(store.dispatch).toHaveBeenCalled();
    });

    it("should dispatch action on selectSource call", () => {
        service.selectSource("id", 1);
        expect(store.dispatch).toHaveBeenCalled();
    });
});
