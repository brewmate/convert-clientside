import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload.component';
import { DownloadComponent } from './components/download.component';
import { RecipeComponent } from './components/recipe.component';
import { ConvertService } from './services/convert.service';

import { JsonPrettyPipe } from './pipes/json-pretty.pipe';
import { RoundPipe } from './pipes/round.pipe';

const APP_COMPONENTS = [
  AppComponent,
  UploadComponent,
  DownloadComponent,
  RecipeComponent,
];

const APP_PIPES = [
  JsonPrettyPipe,
  RoundPipe
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    ...APP_PIPES,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConvertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
