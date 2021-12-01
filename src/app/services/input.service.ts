import {Injectable} from '@angular/core';
import {ContextService} from "./context.service";
import {PressedLetterInterface} from "../interfaces/pressed-letter.interface";
import {fromEvent, Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {INPUT_STATE} from "../enums/input-state.enum";
import {TEXT_PROGRESS_STATE} from "../enums/text-progress-state.enum";
import {OPERATION} from "../enums/operation.enum";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private _code = this.contextService.code
  private _currentExpectedInputIndex: number = 0;
  private _expectedLetter = this._code[this._currentExpectedInputIndex];
  private _expectedNextLetter = this._code[this._currentExpectedInputIndex + 1]
  private _specialCharacter = ["Shift", "Backspace"]

  constructor(
      private contextService: ContextService,
  ) {}

  public startTracking = (): Observable<PressedLetterInterface> => {
    const source = fromEvent(document, "keydown");
    return source.pipe(map((event => this.keyDownHandler(event))))
  }

  private keyDownHandler = (event: any): PressedLetterInterface => {

    let userInput = this.createLetterObject(event)

    userInput = this.addSpecialOperations(userInput)

    if (userInput.isSpecialCharacter) {
      this.specialInputHandler(userInput)
    }
    else {
      if (userInput.letterStatus === INPUT_STATE.CORRECT){
        this.correctInputHandler();
      }
      else {
        this.incorrectInputHandler();
      }
    }

    this.updateIndexStats()
    return userInput
  }

  private correctInputHandler = () => {
    console.log("correct");
    this._currentExpectedInputIndex ++;
  }

  private incorrectInputHandler = () => {
    console.log("incorrect");
    this._currentExpectedInputIndex ++;
  }

  private specialInputHandler = (pressedLetterInterface: PressedLetterInterface) => {
    console.log("special char", pressedLetterInterface.letter)

    switch (pressedLetterInterface.letter){
      case "Backspace":
        if(this._currentExpectedInputIndex !== 0){
          this._currentExpectedInputIndex --;
        }
    }
  }

  private updateIndexStats = () => {
    this._expectedLetter = this.contextService.code[this._currentExpectedInputIndex];
    this._expectedNextLetter = this.contextService.code[this._currentExpectedInputIndex + 1]
  }

  private addSpecialOperations = (pressedLetterInterface: PressedLetterInterface): PressedLetterInterface => {
    switch (this._currentExpectedInputIndex){
      case 0:
        pressedLetterInterface.specialOperation = OPERATION.START
        break;
      case this._code.length -1:
        pressedLetterInterface.specialOperation = OPERATION.END
        break
      default:
        pressedLetterInterface.specialOperation = OPERATION.NONE
    }

    return pressedLetterInterface
  }

  private createLetterObject = (event: any): PressedLetterInterface => {
    return {
      letter: event.key,
      targetLetter: this._expectedLetter,
      targetLetterIndex: this._currentExpectedInputIndex,
      isSpecialCharacter: this._specialCharacter.includes(event.key),
      letterStatus: event.key === this._expectedLetter ? INPUT_STATE.CORRECT : INPUT_STATE.INCORRECT,
      textStatus: TEXT_PROGRESS_STATE.IN_PROGRESS,
    };

  }

}
