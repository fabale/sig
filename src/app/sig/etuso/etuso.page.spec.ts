import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtusoPage } from './etuso.page';

describe('EtusoPage', () => {
  let component: EtusoPage;
  let fixture: ComponentFixture<EtusoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtusoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtusoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
