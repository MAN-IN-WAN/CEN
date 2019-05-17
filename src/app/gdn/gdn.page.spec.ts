import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdnPage } from './gdn.page';

describe('GdnPage', () => {
  let component: GdnPage;
  let fixture: ComponentFixture<GdnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
