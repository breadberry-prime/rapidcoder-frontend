import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private sampleText = 'Local residents had to flee their homes and schoolchildren ducked for cover under their desks as' +
      ' men armed with automatic rifles and rocket-propelled grenade launchers - believed to have been members of Shia ' +
      'and Christian militias - exchanged fire in the streets.'

  constructor() { }

  getText = () => {
    return this.sampleText
  }
}
