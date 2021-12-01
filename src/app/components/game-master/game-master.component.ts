import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js';
import {ContextService} from "../../services/context.service";

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.component.html',
  styleUrls: ['./game-master.component.sass']
})
export class GameMasterComponent implements OnInit {
public codeHi: any;

  constructor(
      public contextService: ContextService
  ) { }

  ngOnInit() {
    this.initializeScreen()
   }

  private initializeScreen = () => {
    const highlightedCode = hljs.highlightAuto('<span>Hello World!</span>')
    console.log(document.getElementById('a'))
    console.log(highlightedCode)
    console.log(typeof(highlightedCode))
    // @ts-ignore
    document.getElementById('a').innerHTML += highlightedCode.value;
  }
}
