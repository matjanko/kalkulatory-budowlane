import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetNameLabelComponent } from './sheet-name-label/sheet-name-label.component';
import { SheetGroupboxComponent } from './sheet-groupbox/sheet-groupbox.component';
import { SheetSelectComponent } from './sheet-select/sheet-select.component';



@NgModule({
  declarations: [
    SheetNameLabelComponent,
    SheetGroupboxComponent,
    SheetSelectComponent
  ],
    exports: [
        SheetNameLabelComponent,
        SheetGroupboxComponent,
        SheetSelectComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
