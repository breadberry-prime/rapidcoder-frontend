import {Injectable} from '@angular/core';
import {GAMESTATE} from "../enums/gamestate.enum";
import {StatsService} from "./stats.service";
import {ViewService} from "./view.service";
import {InputService} from "./input.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameState: GAMESTATE = GAMESTATE.IDLE;

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
    if (this.gameState === GAMESTATE.IDLE || this.gameState === GAMESTATE.FINISHED){
      this.gameState = GAMESTATE.PLAYING;
      const eventEmitter = this.inputService.startTracking()

      eventEmitter.subscribe(pressedLetterInterface => {
        this.viewService.renderAction(pressedLetterInterface)
        this.statsService.trackingUpdate(pressedLetterInterface)
        console.log(pressedLetterInterface)
      })

    } else if (this.gameState === GAMESTATE.PLAYING){
      // additional process when game is running
    }
  }
}
