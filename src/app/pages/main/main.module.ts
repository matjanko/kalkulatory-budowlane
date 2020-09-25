import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SheetsModule } from './sheets/sheets.module';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SheetsModule,
    RouterModule,
    SharedComponentsModule
  ]
})
export class MainModule { }
