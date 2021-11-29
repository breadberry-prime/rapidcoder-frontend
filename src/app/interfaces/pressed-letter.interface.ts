import {INPUT_STATE} from "../enums/input-state.enum";
import {TEXT_PROGRESS_STATE} from "../enums/text-progress-state.enum";

export interface PressedLetterInterface {
  letter: string,
  letterStatus: INPUT_STATE,
  targetLetterIndex: number,
  textStatus: TEXT_PROGRESS_STATE,
  isSpecialCharacter: boolean
}

