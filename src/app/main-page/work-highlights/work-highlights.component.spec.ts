import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHighlightsComponent } from './work-highlights.component';

describe('WorkHighlightsComponent', () => {
  let component: WorkHighlightsComponent;
  let fixture: ComponentFixture<WorkHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
