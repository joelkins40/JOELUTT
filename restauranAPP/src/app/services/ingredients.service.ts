import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { _appIdRandomProviderFactory } from "@angular/core/src/application_tokens";
import { Alert } from "selenium-webdriver";
import { Subject } from "rxjs";

export class IngredientsService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing=new Subject<number>();

    private ingredients: Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index: number){
          return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
        
        this.ingredientsChanged.emit(this.ingredients.slice());
  
          

      }
updateIngredient(index: number,ingredient: Ingredient){
this.ingredients[index]=ingredient;
this.ingredientsChanged.emit(this.ingredients.slice());


}
      addIngredients(auxIngredients: Ingredient[]){
        for(const i of auxIngredients){
            
            
            if (this.ingredients.find(obj => obj.name == i.name)){
                const v=this.ingredients.find(obj => obj.name == i.name);
                const  fl =v.amount+i.amount;
                const newIngredient = new Ingredient(v.name, fl);
                       
                       this.ingredients.push(newIngredient);
                       let index = this.ingredients.findIndex( record => record.name === i.name );
                this.ingredients.splice(index,1);
            }else{
                this.ingredients.push(i);
          
            }              
       
    }
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
     
    
    }
