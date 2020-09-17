import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    //then
    expect(component).toBeTruthy();
  });

  it('should html start with "<header>" tag', () => {
    //given
    let tag = htmlElement.innerHTML.slice(0, 8);

    //then
    expect(tag).toEqual('<header>');
  });

  it('should html end with "</header>" tag', () => {
    //given
    let tag = htmlElement.innerHTML.slice(
      htmlElement.innerHTML.length - 9,
      htmlElement.innerHTML.length
    );

    //then
    expect(tag).toEqual('</header>');
  });
});
