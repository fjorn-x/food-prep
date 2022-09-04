import { Recipe } from '../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.recipeSelected.emit(this.recipe);
  }
}
