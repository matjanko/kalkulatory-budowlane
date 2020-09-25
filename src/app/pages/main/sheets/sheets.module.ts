import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcreteCoverSheetComponent } from './concrete-cover-sheet/concrete-cover-sheet.component';
import { SnowLoadSheetComponent } from './snow-load-sheet/snow-load-sheet.component';



@NgModule({
  declarations: [
    ConcreteCoverSheetComponent,
    SnowLoadSheetComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SheetsModule { }
