import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {ConcreteCoverSheetComponent} from './pages/main/sheets/concrete-cover-sheet/concrete-cover-sheet.component';
import {SnowLoadSheetComponent} from './pages/main/sheets/snow-load-sheet/snow-load-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'otulina-w-betonie',
        component: ConcreteCoverSheetComponent
      },
      {
        path: 'obciazenie-sniegiem',
        component: SnowLoadSheetComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
