import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Parser } from 'xml2js';
import { parseNumbers, parseBooleans } from 'xml2js/lib/processors.js';
import camelCase from 'camelcase';
import { Recipe } from './recipe';
import { isArray } from 'rxjs/util/isArray';

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

}
