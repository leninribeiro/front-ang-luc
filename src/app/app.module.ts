import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-rounting.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaDeMealsComponent } from './lista-de-meals/lista-de-meals.component';
import { MealServiceService } from './service/meal-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeMealsComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MealServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
