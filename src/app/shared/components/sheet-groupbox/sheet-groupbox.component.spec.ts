import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetGroupboxComponent } from './sheet-groupbox.component';

describe('SheetGroupboxComponent', () => {
  let component: SheetGroupboxComponent;
  let fixture: ComponentFixture<SheetGroupboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetGroupboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetGroupboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
