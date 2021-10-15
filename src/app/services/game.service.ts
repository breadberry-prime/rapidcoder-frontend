import { Injectable } from '@angular/core';
import {InputService} from "./input.service";
import {StatsService} from "./stats.service";
import {ContextService} from "./context.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
      private contextService: ContextService,
      private inputService: InputService,
      private statsService: StatsService
  ) { }

  startNewGame = () => {
    const currentText = this.contextService.getText();
  }
}
