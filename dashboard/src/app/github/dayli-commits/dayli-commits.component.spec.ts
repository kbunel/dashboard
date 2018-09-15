import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayliCommitsComponent } from './dayli-commits.component';

describe('DayliCommitsComponent', () => {
  let component: DayliCommitsComponent;
  let fixture: ComponentFixture<DayliCommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayliCommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayliCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
