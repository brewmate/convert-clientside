import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ConvertService } from './convert.service';
import { JsonPrettyPipe } from './json-pretty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    RecipeComponent,
    JsonPrettyPipe
  ],
  imports: [
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
