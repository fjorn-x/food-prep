import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  

  @ViewChild('f') ingredientForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.ingredientForm;
    const ingAmount = this.ingredientForm;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);

  }


  
}
