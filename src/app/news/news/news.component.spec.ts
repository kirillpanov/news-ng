import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { NewsComponent } from "./news.component";
import { NewsStoreService } from "./../../../core/index";

describe("NewsComponent", () => {
    let component: NewsComponent;
    let fixture: ComponentFixture<NewsComponent>;

    const newsStoreServiceStub: any = jasmine.createSpyObj("NewsStoreService", [
        "getSources",
        "selectSource",
        "getArticles"
    ]);
    newsStoreServiceStub.getArticles.and.returnValue(of([{}]));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsComponent],
            providers: [
                {
                    provide: NewsStoreService,
                    useValue: newsStoreServiceStub
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
