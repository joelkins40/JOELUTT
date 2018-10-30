import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   
   //Subcribe estara a la escucha de algun cambio
  }
}
