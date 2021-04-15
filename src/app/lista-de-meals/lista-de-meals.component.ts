import { HttpResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from '../model/meal';
import { MealServiceService } from '../service/meal-service.service';

@Component({
  selector: 'app-lista-de-meals',
  templateUrl: './lista-de-meals.component.html',
  styleUrls: ['./lista-de-meals.component.css']
})
export class ListaDeMealsComponent implements OnInit {

  pesquisa: string = '';
  mealList: Meal[] | null = null;

  constructor(private mealService: MealServiceService) {
  }

  fetchMeals(): void {
    this.mealService.findAll(this.pesquisa).subscribe(meals => {
      this.mealList = meals;
    });
  }



  ngOnInit() {

  }


}
