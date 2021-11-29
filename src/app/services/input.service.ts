import {Injectable} from '@angular/core';
import {ContextService} from "./context.service";
import {PressedLetterInterface} from "../interfaces/pressed-letter.interface";
import {fromEvent, Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {INPUT_STATE} from "../enums/input-state.enum";
import {TEXT_PROGRESS_STATE} from "../enums/text-progress-state.enum";

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private _currentExpectedInputIndex: number = 0;
  private _expectedLetter = this.contextService.code[this._currentExpectedInputIndex];
  private _expectedNextLetter = this.contextService.code[this._currentExpectedInputIndex + 1]
  private _specialCharacter = ["Shift", "Backspace"]

  public eventObservable: Observable<PressedLetterInterface>

  constructor(
      private contextService: ContextService,
  ) {
    const source = fromEvent(document, "keydown");

    this.eventObservable = source.pipe(map((event => this.keyDownHandler(event))))

    this.eventObservable.subscribe(console.log)
  }

  private keyDownHandler = (event: any): PressedLetterInterface => {

    let userInput: PressedLetterInterface = {
      letter: event.key,
      targetLetterIndex: this._currentExpectedInputIndex,
      letterStatus: event.key === this._expectedLetter ? INPUT_STATE.CORRECT : INPUT_STATE.INCORRECT,
      textStatus: TEXT_PROGRESS_STATE.IN_PROGRESS,
      isSpecialCharacter: this._specialCharacter.includes(event.key)
    };

    if (userInput.isSpecialCharacter) {
      console.log("special char", userInput.letter)
      if (userInput.letter === "Backspace") {
        if(this._currentExpectedInputIndex !== 0){
          this._currentExpectedInputIndex --;
        }
      }
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

  private updateIndexStats = () => {
    this._expectedLetter = this.contextService.code[this._currentExpectedInputIndex];
    this._expectedNextLetter = this.contextService.code[this._currentExpectedInputIndex + 1]
  }
}
