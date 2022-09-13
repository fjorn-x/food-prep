import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingredientForm: NgForm;
  subscription: Subscription;
  loadedIngredient: Ingredient;
  editMode = false;
  loadedIngredientIndex: number;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.loadedIngredientIndex = index;
        this.loadedIngredient = this.slService.getIngredient(
          this.loadedIngredientIndex
        );
        this.editMode = true;
        this.ingredientForm.setValue({
          name: this.loadedIngredient.name,
          amount: this.loadedIngredient.amount,
        });

        // document.getElementById('submit').textContent = 'Update';
      }
    );
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.ingredientForm.value.name,
      this.ingredientForm.value.amount
    );
    if (this.editMode) {
      this.slService.updateIngredient(
        this.loadedIngredientIndex,
        newIngredient
      );
      this.editMode = false;
    } else {
      this.slService.addIngredient(newIngredient);
    }

    this.ingredientForm.reset();
  }

  onClear() {
    this.editMode = false;
    this.ingredientForm.reset();
  }
  onDelete() {
    if (this.editMode) {
      this.slService.deleteIngredient(this.loadedIngredientIndex);
    }
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
