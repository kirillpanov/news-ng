import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSelectItemComponent } from './source-select-item.component';

describe('SourceSelectItemComponent', () => {
  let component: SourceSelectItemComponent;
  let fixture: ComponentFixture<SourceSelectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceSelectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
