import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() afterRecipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Tempura Roll',
      'this is sushi',
      './assets/images/tempura-roll.jpeg'
    ),
    new Recipe(
      'Spaghetti',
      'this is spaghetti',
      './assets/images/spaghetti.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipeSelected) {
    this.afterRecipeSelected.emit(recipeSelected);
  }
}
