import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Route } from '@angular/compiler/src/core';
import { Router,Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
recipe: Recipe;
  id:number;
 // @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router:Router ) { } //Con el constructor lo mando a llamar
  @Output() featureSelected = new EventEmitter<string>();
  ngOnInit() {
   this.route.params
   .subscribe((param:Params)=>{
this.id=+param['id'];
this.recipe = this.recipeService.getRecipe(this.id);
   })
   
    //console.log(this.recipe)
  } 
 
  onAddToShoppingList(feature: string){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.featureSelected.emit(feature);
  } 

  onEditRecipe(){ 
    this.router.navigate(['edit'],{relativeTo:this.route})
    
  }
}
