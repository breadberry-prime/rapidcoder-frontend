import { Component, OnInit } from '@angular/core';
import {ContextService} from "../../services/context.service";

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.component.html',
  styleUrls: ['./game-master.component.sass']
})
export class GameMasterComponent implements OnInit {

  constructor(
      public contextService: ContextService
  ) { }

  ngOnInit(): void {
  }
}
