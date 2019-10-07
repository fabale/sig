import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsincoberturaPage } from './chsincobertura.page';

describe('ChsincoberturaPage', () => {
  let component: ChsincoberturaPage;
  let fixture: ComponentFixture<ChsincoberturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChsincoberturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsincoberturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
