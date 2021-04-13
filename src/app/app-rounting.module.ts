import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeMealsComponent } from './lista-de-meals/lista-de-meals.component'

const routes: Routes = [
  {path: '', component: ListaDeMealsComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule
  ],

  declarations: [],


})
export class AppRountingModule { }
