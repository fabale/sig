import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhogarPage } from './chhogar.page';

describe('ChhogarPage', () => {
  let component: ChhogarPage;
  let fixture: ComponentFixture<ChhogarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChhogarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChhogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
