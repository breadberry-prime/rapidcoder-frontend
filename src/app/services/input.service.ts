import { Injectable } from '@angular/core';
import { ContextService } from "./context.service";
import { ViewService } from "./view.service";
import { ViewRenderLetterParameterInterface } from "../interfaces/view.render-letter.parameter.interface";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private currentExpectedInputIndex: number = 0;
  private expectedLetter = this.contextService.text[this.currentExpectedInputIndex];
  private expectedNextLetter = this.contextService.text[this.currentExpectedInputIndex + 1]

  constructor(
      private contextService: ContextService,
      private viewService: ViewService
  ) {
    console.log("init InputService")
    this.initEventLister()
  }

  private keyDownHandler = (event: KeyboardEvent) => {
    // TODO: add if statement to make sure player is in a game
    const pressedLetter = event.key;

    if (pressedLetter === this.expectedLetter) {
      console.log("correct");
      this.correctInputHandler(event);
    } else if (pressedLetter === 'Backspace') {
      this.backspaceInputHandler();
    } else if (pressedLetter === 'Space') {}
    else {
      this.incorrectInputHandler(event);
      console.log("incorrect");
    }

    this.updateIndexStats()

    console.log({
      "receivedLetter": pressedLetter,
      "expectedLetter": this.expectedLetter,
      "expectedInputIndex": this.currentExpectedInputIndex,
    })
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
    console.log("backspaceInputHandler got called", this.currentExpectedInputIndex)
    if(this.currentExpectedInputIndex !== 0){
      this.currentExpectedInputIndex --;
    }
  }

  private updateIndexStats = () => {
    this.expectedLetter = this.contextService.text[this.currentExpectedInputIndex];
    this.expectedNextLetter = this.contextService.text[this.currentExpectedInputIndex + 1]
  }

  private initEventLister = () => {
    document.addEventListener("keydown", (e) => {this.keyDownHandler(e)});
    console.log("current input status", {
      "expectedInput": this.currentExpectedInputIndex,
      "expectedLetter": this.expectedLetter,
      "expectedNextLetter": this.expectedNextLetter
    })
  }
}
