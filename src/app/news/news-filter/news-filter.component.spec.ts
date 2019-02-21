import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NewsFilterComponent } from "./news-filter.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("NewsFilterComponent", () => {
    let component: NewsFilterComponent;
    let fixture: ComponentFixture<NewsFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsFilterComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
