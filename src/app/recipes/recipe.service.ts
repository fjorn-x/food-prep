import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tempura Roll',
      'Sushi at Home !',
      './assets/images/tempura-roll.jpeg',
      [
        new Ingredient('sushi rice in grms', 100),
        new Ingredient(' water ml', 100),
        new Ingredient('tempura batter mix gms', 100),
        new Ingredient('shrimp (peeled and deveined), large', 4),
        new Ingredient('mayonnaise gms', 10),
        new Ingredient(' avocado gms', 30),
        new Ingredient(' English cucumber gms', 20),
        new Ingredient('Toasted nori seaweed sheets', 1),
        new Ingredient(' black and white sesame seeds gms', 10),
      ]
    ),
    new Recipe(
      'Spaghetti',
      'Easy weeknight spaghetti',
      './assets/images/spaghetti.jpeg',
      [
        new Ingredient('pound lean ground meat ', 1),
        new Ingredient('tablespoons olive oil', 3),
        new Ingredient('cup (130 grams) chopped onion', 1),
        new Ingredient('garlic cloves, minced (1 tablespoon)', 3),
        new Ingredient('tablespoons tomato past', 2),
        new Ingredient('teaspoon dried oregano', 1 / 2),
        new Ingredient('crushed red pepper flakes', 1),
        new Ingredient('water, broth or dry red wine', 1),
        new Ingredient(' can crushed tomatoes', 1),
        new Ingredient('Salt and fresh ground black pepper', 1),
        new Ingredient('Handful fresh basil leaves, plus more for serving', 1),
        new Ingredient('ounces dried spaghetti or favorite pasta shape', 12),
        new Ingredient('cup shredded parmesan cheese', 1 / 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
