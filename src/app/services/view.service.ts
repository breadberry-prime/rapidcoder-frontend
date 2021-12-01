import { Injectable, OnInit } from '@angular/core';
import { PressedLetterInterface } from "../interfaces/pressed-letter.interface";
import hljs from 'highlight.js';

@Injectable({
  providedIn: 'root'
})
export class ViewService implements OnInit {
  public code: any;

  constructor() { }

  ngOnInit() {
    this.initializeScreen()
  }

  private initializeScreen = () => {
    hljs.highlightAll();
    const activeText = document.getElementById("codeview")?.textContent;
    // @ts-ignore
    const html = hljs.highlightAuto(activeText);
        // @ts-ignore
    document.getElementById("codeview").innerHTML = html.value
  }

  public renderAction = (actionInterface: PressedLetterInterface) => {
    // TODO implement render action
  }

  public endGame = () => {}
}

