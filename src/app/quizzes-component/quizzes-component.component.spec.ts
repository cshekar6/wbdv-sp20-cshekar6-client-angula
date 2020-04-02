import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesComponentComponent } from './quizzes-component.component';

describe('QuizzesComponentComponent', () => {
  let component: QuizzesComponentComponent;
  let fixture: ComponentFixture<QuizzesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
