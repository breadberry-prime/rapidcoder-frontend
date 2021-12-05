import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js';
import { ViewService } from 'src/app/services/view.service';
import {ContextService} from "../../services/context.service";

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.component.html',
  styleUrls: ['./game-master.component.sass']
})
export class GameMasterComponent implements OnInit {
  constructor(
      public contextService: ContextService,
      public viewService: ViewService
  ) { }

  ngOnInit() {
    this.initializeScreen();
   }

  private initializeScreen = () => {
    const html = this.viewService.refactoring(this.contextService.code, this.contextService.language)
    hljs.highlight(this.contextService.code, {language: this.contextService.language})
    document.getElementById("codeField").appendChild(html)
  }
}
