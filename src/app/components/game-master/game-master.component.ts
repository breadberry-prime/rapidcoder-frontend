import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js';
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

  ngOnInit() {
    this.initializeScreen()
   }

  private initializeScreen = () => {
    const html = hljs.highlight(this.contextService.code, {language: this.contextService.language})
    document.getElementById("codeField").innerHTML = html.value
  }
}
