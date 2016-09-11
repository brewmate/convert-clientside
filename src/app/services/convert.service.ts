import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isArray } from 'rxjs/util/isArray';
import { Parser } from 'xml2js';
import { parseNumbers, parseBooleans } from 'xml2js/lib/processors.js';
import camelCase from 'camelcase';
import yaml from 'js-yaml';
import { Recipe } from '../domain/recipe';

@Injectable()
export class ConvertService {

  constructor() { }

  readToString(file: File): Observable<string> {

    if (!file) {
      return Observable.never();
    }

    const reader = new FileReader();
    const obs = Observable
      .fromEvent(reader, 'load')
      .map<string>(() => reader.result);

    reader.readAsText(file);

    return obs;
  }

  parseXml(str: string) {
    const parser = new Parser({
      normalize: true,
      normalizeTags: true,
      trim: true,
      tagNameProcessors: [camelCase],
      valueProcessors: [parseNumbers, parseBooleans],
      explicitRoot: false,
      explicitArray: false, // Always put child nodes in an array if true; otherwise an array is created only if there is more than one.
      mergeAttrs: true,
    });
    const observableParse = Observable.bindNodeCallback(parser.parseString);
    return observableParse(str);
  }

  normalize(result: any): Recipe {

    if (!result) {
      return result;
    }

    let recipe = result.recipe;

    const normalizePath = expr => {
      if (!expr) {
        return [];
      }

      if (isArray(expr)) {
        return expr;
      } else {
        return [expr];
      }
    };

    recipe.hops = normalizePath(recipe.hops && recipe.hops.hop);
    recipe.fermentables = normalizePath(recipe.fermentables && recipe.fermentables.fermentable);
    recipe.miscs = normalizePath(recipe.miscs && recipe.miscs.misc);
    recipe.yeasts = normalizePath(recipe.yeasts && recipe.yeasts.yeast);
    recipe.waters = normalizePath(recipe.waters && recipe.waters.water);
    if (recipe.mash) {
      recipe.mash.mashSteps = normalizePath(recipe.mash.mashSteps && recipe.mash.mashSteps.mashStep);
    }

    return recipe;
  }

  convert(file: File): Observable<any> {
    return this
      .readToString(file)
      .mergeMap(str => this.parseXml(str))
      .map<Recipe>(this.normalize);
  }

  downloadJson(data: any, filename: string) {
    const jsonStr = JSON.stringify(data, null, 2);

    this.createDownload(jsonStr, filename, 'application/json');
  }

  downloadYaml(data: any, filename: string) {
    const yamlStr = yaml.dump(data);

    this.createDownload(yamlStr, filename, 'application/x-yaml');
  }

  private createDownload(data: any, filename: string, mimetype = 'text/plain') {
    const blob = new Blob([data], { type: mimetype });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;
      document.body.appendChild(elem);
      elem.click();
      window.URL.revokeObjectURL(elem.href);
      document.body.removeChild(elem);
    }
  }

}
