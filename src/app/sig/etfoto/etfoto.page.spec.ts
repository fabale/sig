import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfotoPage } from './etfoto.page';

describe('EtfotoPage', () => {
  let component: EtfotoPage;
  let fixture: ComponentFixture<EtfotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
