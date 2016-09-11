import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app-bg">
    <div class="container">
      <h1 class="p-t-1 display-1 text-xs-center">Beer XML Converter</h1>
      <p class="lead text-xs-center">Convert from beer xml to json and yaml, simply drop you beer xml file below.</p>
    
      <app-upload #upload></app-upload>
    </div>
  </div>
  <div class="container">
    <app-download class="m-y-1" [file]="upload.fileDrop | async"></app-download>
  </div>
  `
})
export class AppComponent {
}
