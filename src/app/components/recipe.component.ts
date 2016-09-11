import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from '../domain/recipe';

@Component({
  selector: 'app-recipe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input()
  recipe: Recipe;

}
