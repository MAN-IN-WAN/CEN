import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlachiaPage } from './tlachia.page';

describe('TlachiaPage', () => {
  let component: TlachiaPage;
  let fixture: ComponentFixture<TlachiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlachiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlachiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
