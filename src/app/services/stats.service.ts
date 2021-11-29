import { Injectable } from '@angular/core';
import {PressedLetterInterface} from "../interfaces/pressed-letter.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() {}

  public startTracking = (eventEmitter: Observable<PressedLetterInterface>) => {
    eventEmitter.subscribe(this.eventManager)
  }

  private eventManager = (LetterUpdate: PressedLetterInterface) => {
    // TODO: Handle events from emitter
    console.log(LetterUpdate)
  }
}
