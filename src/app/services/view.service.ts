import { Injectable } from '@angular/core';
import {ViewRenderLetterParameterInterface} from "../interfaces/view.render-letter.parameter.interface";

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }

  public renderLetter = (actionDescription: ViewRenderLetterParameterInterface) => {}
  public startGame = () => {}
  public endGame = () => {}
}
