import { Injectable } from '@angular/core';
import {PressedLetterInterface} from "../interfaces/pressed-letter.interface";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() {}

  public trackingUpdate = (actionInterface: PressedLetterInterface) => {
    // TODO: Handle events from emitter
  }
}
