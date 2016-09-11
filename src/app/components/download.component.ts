import { Component, Input } from '@angular/core';
import { ConvertService } from '../services/convert.service';

@Component({
  selector: 'app-download',
  templateUrl: `
    <div *ngIf="recipe">
      <h1 class="m-y-3 display-1 text-xs-center">{{recipe.name}}</h1>
      
      <div class="row">
        <div class="col-xs-6">
          <button class="btn btn-primary btn-block btn-lg" type="button" (click)="downloadJson()"><i class="fa fa-download"></i> Download JSON</button>        
        </div>
        <div class="col-xs-6">
          <button class="btn btn-primary btn-block btn-lg" type="button" (click)="downloadYaml()"><i class="fa fa-download"></i> Download YAML</button>
        </div>
      </div>
      
      <app-recipe class="m-y-2" [recipe]="recipe"></app-recipe>
    </div>
  `
})
export class DownloadComponent {

  recipe: any;

  @Input()
  set file(file: File) {
    this.convertService.convert(file).subscribe(recipe => {
      this.recipe = recipe;
    });
  };

  constructor(private convertService: ConvertService) {

  }

  downloadJson() {
    this.convertService.downloadJson(this.recipe, this.recipe.name + '.json');
  }

  downloadYaml() {
    this.convertService.downloadYaml(this.recipe, this.recipe.name + '.yaml');
  }

}
