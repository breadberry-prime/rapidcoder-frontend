import { Injectable} from '@angular/core';
import {GameService} from "./game.service";
import {GAMESTATE} from "../enums/gamestate.enum";
import {ContextService} from "./context.service";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private currentExpectedInputIndex: number = 0;
  private expectedLetter = this.contextService.getText()[this.currentExpectedInputIndex];

  constructor(
      private gameService: GameService,
      private contextService: ContextService
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
  }

  private backspaceInputHandler = () => {
    this.currentExpectedInputIndex --;
  }

  private initEventLister = () => {
    document.addEventListener("keydown", (e) => {});
  }
}
