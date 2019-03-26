import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDetailPage } from './agenda-detail.page';

describe('AgendaDetailPage', () => {
  let component: AgendaDetailPage;
  let fixture: ComponentFixture<AgendaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
