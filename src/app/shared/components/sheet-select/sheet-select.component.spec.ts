import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetSelectComponent } from './sheet-select.component';

describe('SheetSelectComponent', () => {
  let component: SheetSelectComponent;
  let fixture: ComponentFixture<SheetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
