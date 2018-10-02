import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySongComponent } from './daily-song.component';

describe('DailySongComponent', () => {
  let component: DailySongComponent;
  let fixture: ComponentFixture<DailySongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
