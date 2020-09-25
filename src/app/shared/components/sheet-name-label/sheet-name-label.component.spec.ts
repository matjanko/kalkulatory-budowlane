import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetNameLabelComponent } from './sheet-name-label.component';

describe('SheetNameLabelComponent', () => {
  let component: SheetNameLabelComponent;
  let fixture: ComponentFixture<SheetNameLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetNameLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetNameLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
