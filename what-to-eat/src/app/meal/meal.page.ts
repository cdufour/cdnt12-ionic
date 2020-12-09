import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealdbApiService } from '../mealdb-api.service';
import { MEALDB_Meal } from '../model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  meal: MEALDB_Meal | null = null;
  tags: string[] = [];
  ingredients: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private mealdb: MealdbApiService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    let mealId: string = this.route.snapshot.paramMap.get("id");
    this.mealdb.findById(mealId)
      .subscribe(meal => {
        this.meal = meal;

        // strTags peut valoir null (exemple: 52995)
        if (meal.strTags != null)
          this.tags = meal.strTags.split(',');
        
          this.ingredients = this.getIngredients(meal);
      })
  }

  getYoutubeUrl(meal: MEALDB_Meal): SafeResourceUrl {
    // en entrée strYoutube: https://www.youtube.com/watch?v=4aZr5hZXP_s
    // en sortie: https://www.youtube.com/embed/4aZr5hZXP_s
    let ytLink: string = meal.strYoutube.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(ytLink);
  }

  private getIngredients(meal: MEALDB_Meal): string[] {
    let ingredients: string[] = [];
    for (let i=1; i<21; i++) {
      let ingredient = meal["strIngredient" + i];
      if (ingredient) ingredients.push(ingredient + ' ' + meal["strMeasure" + i]);
    }
    return ingredients;
  }

}
