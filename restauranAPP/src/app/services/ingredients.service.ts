import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { _appIdRandomProviderFactory } from "@angular/core/src/application_tokens";

export class IngredientsService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      //Una vez obtenidos se deben guardar en el arreglo, con un foreach donde se obtiene el objeto con una constante i
      addIngredients(auxIngredients: Ingredient[]){
        for(const i of auxIngredients){
            
            this.ingredients.push(i);

        }
        //Una vez esto se volvera a ejecutar el evento con el emitter
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}