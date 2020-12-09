import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MEALDB_ListItem, MEALDB_Meal } from './model';
import { map } from 'rxjs/operators';

const API = {
  ROOT: "https://www.themealdb.com/api/json/v1/1/",
  get FILTER_CATEGORY() {
    return this.ROOT + "filter.php?c="
  },
  get FILTER_AREA() {
    return this.ROOT + "filter.php?a="
  },
  get LOOKUP() {
    return this.ROOT + "lookup.php?i="
  }
}

@Injectable({
  providedIn: 'root'
})
export class MealdbApiService {

  constructor(private http: HttpClient) { }

  findByCategory(name: string): Observable<MEALDB_ListItem[]> {
    return this.http
      .get<MEALDB_ListItem[]>(API.FILTER_CATEGORY + name)
      .pipe(
        map((res: any) => res.meals)
      )
  }

  findByArea(name: string): Observable<MEALDB_ListItem[]> {
    return this.http
      .get<MEALDB_ListItem[]>(API.FILTER_AREA + name)
      .pipe(
        map((res: any) => res.meals)
      )
  }

  findById(id: string): Observable<MEALDB_Meal> {
    return this.http
      .get<MEALDB_Meal>(API.LOOKUP + id)
      .pipe(
        map((res: any) => res.meals[0]) // retour du seul repas situé dans ce tableau
      )
  }
}
