import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'this is spaghetti',
      'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg'
    ),
    new Recipe(
      'Spaghetti',
      'this is spaghetti',
      './assets/images/spaghetti.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
