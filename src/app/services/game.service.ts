import {Injectable} from '@angular/core';
import {InputService} from "./input.service";
import {StatsService} from "./stats.service";
import {ContextService} from "./context.service";
import {GAMESTATE} from "../enums/gamestate.enum";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  protected gameState: GAMESTATE = GAMESTATE.IDLE;

  constructor(
      private contextService: ContextService,
      private inputService: InputService,
      private statsService: StatsService
  ) { }

  private submitGameResult = (gameResult: any) => {
    // send formatted data to view service to display stats to user
  }

  startNewGame = () => {
    if (this.gameState === GAMESTATE.IDLE || this.gameState === GAMESTATE.FINISHED){
      this.gameState = GAMESTATE.PLAYING;
      const currentText = this.contextService.getText();

      // TODO: start input service monitoring
      // this.inputService.startInputMonitoring(currentText).then(gameResult => {});

    } else if (this.gameState === GAMESTATE.PLAYING){
      // additional process when game is running
    }
  }
}
