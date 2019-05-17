import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoaPage } from './temoa.page';

describe('TemoaPage', () => {
  let component: TemoaPage;
  let fixture: ComponentFixture<TemoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
