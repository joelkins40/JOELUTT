import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
id:number;
editMode=false;
recipeForm:FormGroup;

constructor(private route:ActivatedRoute,private recipeService:RecipeService) { 

  }

  ngOnInit() {
  this.route.params.subscribe((params:Params)=>{
this.id=+params['id'];
this.editMode=params['id']!=null;
console.log(this.editMode);
this.initForm();
  });
  }
  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    const ingredients=new FormArray([]);
//ingredients
if(this.editMode){
const recipe=this.recipeService.getRecipe(this.id);
recipeName=recipe.name;
recipeImagePath=recipe.imagePath;
recipeDescription=recipe.description;
if(recipe['ingredients']){
  for(const ingredient of recipe.ingredients){
    ingredients.push(
      new FormGroup({
'name' : new FormControl(ingredient.name,Validators.required),
'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
])

      })
    );
  }
}
console.log(recipe)

}
this.recipeForm=new FormGroup({
  'name':new FormControl(recipeName,Validators.required),
  'imagePath':new FormControl(recipeImagePath,Validators.required),
  'description':new FormControl(recipeDescription,Validators.required),
  'ingredients':ingredients
});
  }
  onAddIngredient(){
  (<FormArray> this.recipeForm.get('ingredients')).push(
  new FormGroup ({
    'name':new FormControl(null,Validators.required),
  'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
  })
  )
  }
  onSubmit(){
  console.log(this.recipeForm)
    // const newRecipe= new Recipe(this.re);

  }

}
