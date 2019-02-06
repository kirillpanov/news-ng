import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLineItemComponent } from './news-line-item.component';

describe('NewsLineItemComponent', () => {
  let component: NewsLineItemComponent;
  let fixture: ComponentFixture<NewsLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
