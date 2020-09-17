import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SheetsComponent } from './sheets/sheets.component';



@NgModule({
  declarations: [MainComponent, SheetsComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
