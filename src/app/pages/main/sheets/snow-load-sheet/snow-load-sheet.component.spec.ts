import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowLoadSheetComponent } from './snow-load-sheet.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SnowLoadSheetComponent', () => {
  let component: SnowLoadSheetComponent;
  let fixture: ComponentFixture<SnowLoadSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowLoadSheetComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowLoadSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
