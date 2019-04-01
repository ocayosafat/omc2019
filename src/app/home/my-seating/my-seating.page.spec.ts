import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySeatingPage } from './my-seating.page';

describe('MySeatingPage', () => {
  let component: MySeatingPage;
  let fixture: ComponentFixture<MySeatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySeatingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySeatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
