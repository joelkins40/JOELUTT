import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { _appIdRandomProviderFactory } from "@angular/core/src/application_tokens";
import { Alert } from "selenium-webdriver";

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

      addIngredients(auxIngredients: Ingredient[]){
        for(const i of auxIngredients){
            
            
        if (this.ingredients.find(obj => obj.name == i.name)){
            const v=this.ingredients.find(obj => obj.name == i.name);
            const am=this.ingredients.find(obj => obj.amount == i.amount);
            let index = this.ingredients.findIndex( record => record.name === v.name );
            const  fl =am.amount+i.amount;
            console.log(fl);    
            this.ingredients.slice(index);
            
           
        }else{
            this.ingredients.push(i);
           
        }
         

            
                
        }
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
     
    
    }
