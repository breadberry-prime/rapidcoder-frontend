import {INPUT_STATE} from "../enums/input-state.enum";
import {TEXT_PROGRESS_STATE} from "../enums/text-progress-state.enum";
import {OPERATION} from "../enums/operation.enum";

export interface PressedLetterInterface {
  letter: string,
  targetLetter: string,
  targetLetterIndex: number,
  isSpecialCharacter: boolean,
  letterStatus: INPUT_STATE,
  textStatus: TEXT_PROGRESS_STATE,
  specialOperation?: OPERATION
}
