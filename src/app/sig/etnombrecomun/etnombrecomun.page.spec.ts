import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtnombrecomunPage } from './etnombrecomun.page';

describe('EtnombrecomunPage', () => {
  let component: EtnombrecomunPage;
  let fixture: ComponentFixture<EtnombrecomunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtnombrecomunPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtnombrecomunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
