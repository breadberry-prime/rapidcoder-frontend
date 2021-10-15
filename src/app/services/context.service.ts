import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private _activeText: string = 'Local residents had to flee their homes and schoolchildren ducked for cover under their desks as' +
      ' men armed with automatic rifles and rocket-propelled grenade launchers - believed to have been members of Shia ' +
      'and Christian militias - exchanged fire in the streets.';
  private _activeTextWordCount: number = 28;

  constructor() {}

  public get text() {
    return this._activeText;
  }

  public get wordCount() {
    return this._activeTextWordCount;
  }

  public getNewText = (random: true, codingLanguage = "") => {
    // TODO replace _activeText with new value, if random random.
    // TODO create language ENUM and react appropriately.
  }
}
