import { Injectable } from '@angular/core';
import {PressedLetterInterface} from "../interfaces/pressed-letter.interface";

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }

  private initializeScreen = () => {}

  public renderAction = (actionInterface: PressedLetterInterface) => {
    // TODO implement render action
  }

  public endGame = () => {}
}

