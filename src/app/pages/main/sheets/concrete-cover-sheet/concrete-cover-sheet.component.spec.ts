import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteCoverSheetComponent } from './concrete-cover-sheet.component';

describe('ConcreteCoverSheetComponent', () => {
  let component: ConcreteCoverSheetComponent;
  let fixture: ComponentFixture<ConcreteCoverSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteCoverSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteCoverSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
