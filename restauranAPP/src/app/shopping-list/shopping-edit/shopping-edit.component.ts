import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  
private subcription: Subscription;
editedItem:Ingredient;  
@ViewChild('f') slForm: NgForm;
editMode=false;
indexEditedItem:number;

constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subcription=this.ingredientsService.startedEditing.subscribe((index:number)=>{
      this.indexEditedItem=index;

    this.editedItem=this.ingredientsService.getIngredient(index);
    this.editMode=true;
 this.slForm.setValue({
   name:this.editedItem.name,
   amount:this.editedItem.amount,
   
 })
  });

  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  onAddItem(form: NgForm){
   
    const value=form.value;   

    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.ingredientsService.updateIngredient(this.indexEditedItem,newIngredient)
      this.editMode=false;
          
    }else{
      
      this.ingredientsService.addIngredient(newIngredient);
  
    }
   
  }
 
} 