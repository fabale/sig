import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadHPage } from './calidad-h.page';

describe('CalidadHPage', () => {
  let component: CalidadHPage;
  let fixture: ComponentFixture<CalidadHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalidadHPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
