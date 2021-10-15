import { Injectable} from '@angular/core';
import {GameService} from "./game.service";
import {GAMESTATE} from "../enums/gamestate.enum";
import {ContextService} from "./context.service";
import {ViewService} from "./view.service";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private currentExpectedInputIndex: number = 0;
  private expectedLetter = this.contextService.text[this.currentExpectedInputIndex];

  constructor(
      private gameService: GameService,
      private contextService: ContextService,
      private viewService: ViewService
  ) {
    this.initEventLister()
  }

  private keyDownHandler = (event: any) => {
    const pressedLetter = event.key;

    if (pressedLetter === this.expectedLetter){
      this.correctInputHandler();
    } else if (event.key === 'Backspace') {
      this.backspaceInputHandler();
    }

    if (this.gameService.gameState === GAMESTATE.PLAYING){}
  }

  private correctInputHandler = () => {
    this.currentExpectedInputIndex ++;

  }

  private incorrectInputHandler = (event: any) => {
    const pressedLetter = event.key;
    const nextLetter = ""
    this.viewService.renderLetter({correct: false, nextLetter: true})
    // TODO create enum for renderLetter function
    // TODO write tests for concept completion
  }

  private backspaceInputHandler = () => {
    this.currentExpectedInputIndex --;
  }

  private initEventLister = () => {
    document.addEventListener("keydown", (e) => {});
  }
}
