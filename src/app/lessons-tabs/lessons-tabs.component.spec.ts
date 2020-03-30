import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsTabsComponent } from './lessons-tabs.component';

describe('LessonsTabsComponent', () => {
  let component: LessonsTabsComponent;
  let fixture: ComponentFixture<LessonsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
