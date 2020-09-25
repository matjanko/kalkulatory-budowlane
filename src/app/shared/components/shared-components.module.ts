import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetNameLabelComponent } from './sheet-name-label/sheet-name-label.component';



@NgModule({
  declarations: [
    SheetNameLabelComponent
  ],
  exports: [
    SheetNameLabelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
