import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";


@Injectable() // Decorador para poder agregar un servicio dentro de otro
export class RecipeService {
//recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg', 
    [
        new Ingredient('bread', 2),
        new Ingredient('Tomatoes', 3)
    ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg',
        [
            new Ingredient('Beef', 3),
            new Ingredient('garlic', 1),
            new Ingredient('bread', 2)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
        [
            new Ingredient('Sauce', 2),
            new Ingredient('bread', 2)
        ])
    ];

    //Crear constructor para utilizar el ingredientsService
    constructor(private ingredientsService: IngredientsService){}

      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes[index];
      }

      //Metodo para invocar desde la vista
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }

}