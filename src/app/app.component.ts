import { Component } from '@angular/core';
import {GameService} from "./services/game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private gameService: GameService) {}

  title = 'rapid-coder';
}
