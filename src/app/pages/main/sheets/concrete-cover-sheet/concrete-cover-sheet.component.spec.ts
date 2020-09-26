import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteCoverSheetComponent } from './concrete-cover-sheet.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConcreteCoverSheetComponent', () => {
  let component: ConcreteCoverSheetComponent;
  let fixture: ComponentFixture<ConcreteCoverSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteCoverSheetComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteCoverSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
