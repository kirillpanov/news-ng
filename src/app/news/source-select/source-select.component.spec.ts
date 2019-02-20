import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SourceSelectComponent } from "./source-select.component";
import { ElementRef, NO_ERRORS_SCHEMA } from "@angular/core";

describe("SourceSelectComponent", () => {
    let component: SourceSelectComponent;
    let fixture: ComponentFixture<SourceSelectComponent>;
    const elementRefStub: any = {
        nativeElement: {
            contains: () => {}
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SourceSelectComponent],
            providers: [
                {
                    provide: ElementRef,
                    useValue: elementRefStub
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SourceSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
