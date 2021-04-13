import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from '../model/meal';
import { MealList } from '../model/meal-list';
import { MealServiceService } from '../service/meal-service.service';

@Component({
  selector: 'app-lista-de-meals',
  templateUrl: './lista-de-meals.component.html',
  styleUrls: ['./lista-de-meals.component.css']
})
export class ListaDeMealsComponent implements OnInit {

  public pesquisa: string= '';
  listandoMeals:  MealList = new MealList;


  constructor(private mealService: MealServiceService) {
  }



  ngOnInit() {

  }

  listarMeals() {
    this.mealService.findAll(this.pesquisa).forEach( res => {


        //const parseData = JSON.parse(data).listandoMeals.;
        var newData = JSON.parse(JSON.stringify(res));
        console.log("newDataParse " + newData);
        this.listandoMeals.listaMeal.push(newData);


     });

     console.log(this.pesquisa);
     console.log(this.listandoMeals);
  }

}
