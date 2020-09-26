import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetNameLabelComponent } from './sheet-name-label/sheet-name-label.component';
import { SheetGroupboxComponent } from './sheet-groupbox/sheet-groupbox.component';



@NgModule({
  declarations: [
    SheetNameLabelComponent,
    SheetGroupboxComponent
  ],
    exports: [
        SheetNameLabelComponent,
        SheetGroupboxComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
