import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSurveyComponent } from './preview-survey.component';

describe('PreviewSurveyComponent', () => {
  let component: PreviewSurveyComponent;
  let fixture: ComponentFixture<PreviewSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
