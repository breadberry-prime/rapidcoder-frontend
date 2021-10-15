import { Injectable} from '@angular/core';
import {GameService} from "./game.service";
import {GAMESTATE} from "../enums/gamestate.enum";
import {ContextService} from "./context.service";
import {ViewService} from "./view.service";
import {ViewRenderLetterParameterInterface} from "../interfaces/view.render-letter.parameter.interface";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private currentExpectedInputIndex: number = 0;
  private expectedLetter = this.contextService.text[this.currentExpectedInputIndex];
  private expectedNextLetter = this.contextService.text[this.currentExpectedInputIndex + 1]

  constructor(
      private gameService: GameService,
      private contextService: ContextService,
      private viewService: ViewService
  ) {
    this.initEventLister()
  }

  private keyDownHandler = (event: KeyboardEvent) => {
    // TODO: add if statement to make sure player is in a game
    const pressedLetter = event.key;

    if (pressedLetter === this.expectedLetter){
      this.correctInputHandler(event);
    } else if (pressedLetter === 'Backspace') {
      this.backspaceInputHandler();
    } else {
      this.incorrectInputHandler(event);
    }
  }

  private correctInputHandler = (event: KeyboardEvent) => {
    this.currentExpectedInputIndex ++;

    let renderParameter: ViewRenderLetterParameterInterface = {
      correct: true,
      allowNextWordToGetTyped: true,
      isWhitespace: event.key === " "
    }

    this.viewService.renderLetter(renderParameter)
  }

  private incorrectInputHandler = (event: KeyboardEvent) => {
    let renderParameter: ViewRenderLetterParameterInterface = {
      correct: false,
      allowNextWordToGetTyped: event.key !== " ",
      isWhitespace: event.key === " ",
      incorrectLetter: event.key
    }

    this.viewService.renderLetter(renderParameter)
  }

  private backspaceInputHandler = () => {
    this.currentExpectedInputIndex --;
  }

  private initEventLister = () => {
    document.addEventListener("keydown", (e) => {});
  }
}
