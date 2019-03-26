import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlanPage } from './floor-plan.page';

describe('FloorPlanPage', () => {
  let component: FloorPlanPage;
  let fixture: ComponentFixture<FloorPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
