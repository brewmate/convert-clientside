import { Component, OnInit, Input } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe: any;

  @Input()
  set file(file: File) {
    console.log('file set', file);
    this.convertService.convert(file).subscribe(recipe => {
      console.log('converted recipe', recipe);
      this.recipe = recipe
    });
  };

  constructor(private convertService: ConvertService) { }

  ngOnInit() {

  }

}
