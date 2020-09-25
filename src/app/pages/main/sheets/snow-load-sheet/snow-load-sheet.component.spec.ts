import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowLoadSheetComponent } from './snow-load-sheet.component';

describe('SnowLoadSheetComponent', () => {
  let component: SnowLoadSheetComponent;
  let fixture: ComponentFixture<SnowLoadSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowLoadSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowLoadSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
