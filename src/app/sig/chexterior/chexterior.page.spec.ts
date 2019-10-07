import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChexteriorPage } from './chexterior.page';

describe('ChexteriorPage', () => {
  let component: ChexteriorPage;
  let fixture: ComponentFixture<ChexteriorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChexteriorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChexteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
