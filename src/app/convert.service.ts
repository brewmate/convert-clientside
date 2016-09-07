import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Parser } from 'xml2js';
import { parseNumbers, parseBooleans } from 'xml2js/lib/processors.js';

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
      valueProcessors: [parseNumbers, parseBooleans],
      explicitRoot: false,
      explicitArray: false, // Always put child nodes in an array if true; otherwise an array is created only if there is more than one.
    });
    const observableParse = Observable.bindNodeCallback(parser.parseString);
    return observableParse(str);
  }

  convert(file: File): Observable<any> {
    return this.readToString(file).mergeMap(str => this.parseXml(str));
  }

}
