import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  @Input('lenfromitem') recipesLength: number;

  constructor(private route: ActivatedRoute, private recipes: RecipeService) {}

  ngOnInit() {
    // this.index=this.recipes.getRecipes[];
  }
}
