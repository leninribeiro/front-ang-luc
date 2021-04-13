import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MealList } from '../model/meal-list';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:8080/meal/";
  }

  public findAll(pesquisa: string): Observable<MealList> {
    return this.http.get<MealList>(this.apiUrl+pesquisa);
  }
}
