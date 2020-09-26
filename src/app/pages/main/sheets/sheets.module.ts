import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcreteCoverSheetComponent } from './concrete-cover-sheet/concrete-cover-sheet.component';
import { SnowLoadSheetComponent } from './snow-load-sheet/snow-load-sheet.component';
import {SharedComponentsModule} from '../../../shared/components/shared-components.module';



@NgModule({
  declarations: [
    ConcreteCoverSheetComponent,
    SnowLoadSheetComponent
  ],
    imports: [
        CommonModule,
        SharedComponentsModule,
    ]
})
export class SheetsModule { }
