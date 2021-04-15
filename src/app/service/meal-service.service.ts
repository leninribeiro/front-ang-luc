import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Meal } from '../model/meal';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  apiUrl = "https://desafios-back-end.herokuapp.com/meal/";

  constructor(private http: HttpClient) {
  }

  public findAll(pesquisa: string): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl+pesquisa);
  }
}
