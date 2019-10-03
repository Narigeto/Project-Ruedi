import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveEntryDetailPage } from './love-entry-detail.page';

describe('LoveEntryDetailPage', () => {
  let component: LoveEntryDetailPage;
  let fixture: ComponentFixture<LoveEntryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveEntryDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveEntryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
