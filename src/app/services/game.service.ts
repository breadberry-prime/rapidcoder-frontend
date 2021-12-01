import {Injectable} from '@angular/core';
import {GAME_STATE} from "../enums/game-state.enum";
import {StatsService} from "./stats.service";
import {ViewService} from "./view.service";
import {InputService} from "./input.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameState: GAME_STATE = GAME_STATE.IDLE;

  constructor(
      private statsService: StatsService,
      private viewService: ViewService,
      private inputService: InputService
  ) {
    this.startNewGame()
  }

  private submitGameResult = (gameResult: any) => {
    // send formatted data to view service to display stats to user
  }

  startNewGame = () => {
    if (this.gameState === GAME_STATE.IDLE || this.gameState === GAME_STATE.FINISHED){
      this.gameState = GAME_STATE.PLAYING;
      const eventEmitter = this.inputService.startTracking()

      eventEmitter.subscribe(pressedLetterInterface => {
        this.statsService.trackingUpdate(pressedLetterInterface)
        console.log(pressedLetterInterface)
      })

    } else if (this.gameState === GAME_STATE.PLAYING){
      // additional process when game is running
    }
  }
}
