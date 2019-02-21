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

    it("should set ifShowDropDown to true on showDropDown call", () => {
        component.showDropDown();
        expect(component.ifShowDropDown).toBe(true);
    });

    describe("onClick", () => {
        it("should set ifShowDropDown to false on call if ifShowDropDown is true and elementRef contains event target", () => {
            component.ifShowDropDown = true;
            spyOn(elementRefStub.nativeElement, "contains").and.returnValue(
                false
            );

            component.onClick({});
            expect(component.ifShowDropDown).toBe(false);
        });

        it("should set ifShowDropDown to false on call if ifShowDropDown is false or elementRef does not contain event target", () => {
            component.ifShowDropDown = false;
            spyOn(elementRefStub.nativeElement, "contains").and.returnValue(
                false
            );

            component.onClick({});
            expect(component.ifShowDropDown).toBe(false);
        });
    });

    describe("selectSource", () => {
        it("should set ifShowDropDown to false on call", () => {
            component.ifShowDropDown = true;

            component.selectSource({}, "id");
            expect(component.ifShowDropDown).toBe(false);
        });

        it("should set selectedSource from sources by id", () => {
            const fakeSource: any = {
                id: "id",
                name: "name"
            };
            component.selectedSource = undefined;
            component.sources = [fakeSource];

            fixture.detectChanges();

            component.selectSource({}, "id");
            expect(component.selectedSource).toBe(fakeSource);
        });
    });
});
