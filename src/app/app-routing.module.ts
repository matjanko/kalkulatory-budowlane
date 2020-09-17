import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SheetsComponent } from './pages/sheets/sheets.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'kalkulatory',
    component: SheetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
