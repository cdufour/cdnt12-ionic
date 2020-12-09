import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealdbApiService } from '../mealdb-api.service';
import { MEALDB_ListItem, MEALDB_Category } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  meals: MEALDB_ListItem[] | null = null;
  categories: string[] = [];
  defaultCategory: string = "Seafood";

  constructor(
    private mealdb: MealdbApiService,
    private route: ActivatedRoute) {
      let areaName = this.route.snapshot.paramMap.get("areaName");
      
      if (areaName) {
        this.loadMeals("area", areaName);
      } else {
        this.loadMeals("category", this.defaultCategory);
      }

      this.categories = Object.keys(MEALDB_Category);
  }

  loadMeals(filterBy: string, value: string) {
    let source;

    if (filterBy == "category") {
      source = this.mealdb.findByCategory(value);
    } else if (filterBy == "area") {
      source = this.mealdb.findByArea(value);
    }

    source.subscribe(meals => this.meals = meals)
  
    }

  onChange(e: any) {
    this.loadMeals("category", e.target.value);
  }

}
