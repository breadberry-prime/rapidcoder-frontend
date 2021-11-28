import { Injectable } from '@angular/core';
import { ContextService } from "./context.service";
import { PressedLetterInterface } from "../interfaces/pressed-letter.interface";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private _currentExpectedInputIndex: number = 0;
  private _expectedLetter = this.contextService.code[this._currentExpectedInputIndex];
  private _expectedNextLetter = this.contextService.code[this._currentExpectedInputIndex + 1]
  private _specialCharacter = ["Shift", "Backspace"]

  constructor(
      private contextService: ContextService,
  ) {
    this.initEventLister()
  }

  private keyDownHandler = (event: KeyboardEvent) => {
    // TODO: add if statement to make sure player is in a game
    const pressedLetter = this.getPressedLetter(event.key);

    console.log(Object.assign(pressedLetter, {
      "_expectedLetter": this._expectedLetter,
      "expectedInputIndex": this._currentExpectedInputIndex,
    }))

    if (pressedLetter.isSpecialCharacter) {
      console.log("special char", pressedLetter.letter)
      if (pressedLetter.letter === "Backspace") {
        if(this._currentExpectedInputIndex !== 0){
          this._currentExpectedInputIndex --;
        }
      }
    }
    else {
      if (pressedLetter.isCorrect){
        this.correctInputHandler(pressedLetter);
      }
      else {
        this.incorrectInputHandler(pressedLetter);
      }
    }

    this.updateIndexStats()
  }

  private correctInputHandler = (pressedLetter: PressedLetterInterface) => {
    console.log("correct");
    this._currentExpectedInputIndex ++;

    // TODO: call view service with fitting parameter
  }

  private incorrectInputHandler = (pressedLetter: PressedLetterInterface) => {
    console.log("incorrect");
    this._currentExpectedInputIndex ++;

    // TODO: call view service with fitting parameter
  }

  private updateIndexStats = () => {
    this._expectedLetter = this.contextService.code[this._currentExpectedInputIndex];
    this._expectedNextLetter = this.contextService.code[this._currentExpectedInputIndex + 1]
  }

  private getPressedLetter = (letter: string): PressedLetterInterface => {
    return {
      letter: letter,
      isCorrect: letter === this._expectedLetter,
      isSpecialCharacter: this._specialCharacter.includes(letter)
    }
  }

  private initEventLister = () => {
    document.addEventListener("keydown", (e) => {this.keyDownHandler(e)});
  }
}
