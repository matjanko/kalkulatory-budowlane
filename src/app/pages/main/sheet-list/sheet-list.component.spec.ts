import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetListComponent } from './sheet-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SheetListComponent', () => {
  let component: SheetListComponent;
  let fixture: ComponentFixture<SheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SheetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
