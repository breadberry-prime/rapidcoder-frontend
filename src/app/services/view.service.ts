import { Injectable, OnInit, ViewChild } from '@angular/core';
import { themeInterface } from '../interfaces/theme.interface';
import { themes } from '../data/themes';


@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private _activeTheme: themeInterface;

  constructor() {
    this.setRandomTheme();
    this.loadTheme();
  }
  
  public refactoring = () => {
    const codeElements = document.getElementsByTagName("code")[0].childNodes;

    codeElements.forEach(codeElement => {
      let indexOfLetter = 0; 
      
      const wrapper = document.createElement("div")
      const codeBlockValue = codeElement.textContent

      for (const letter of codeBlockValue) {
        const span = document.createElement("span")
        span.innerText = letter
        span.setAttribute("id", indexOfLetter.toString())
        // @ts-ignore
        span.setAttribute("class", codeElement)
        wrapper.appendChild(span)

        indexOfLetter++;
      }
    })
  }
  
  public set activeTheme(id: number) {
    this._activeTheme = themes[id];
    this.loadTheme();
  }

  private loadTheme = () => {
    const head = document.getElementsByTagName("head")[0]

    const link = document.createElement("link")
    link.href = "/assets/themes/" + this._activeTheme.fileName
    link.type = "text/css";
    link.rel = "stylesheet"

    head.appendChild(link)
  }

  private setRandomTheme = () => {
    let maxIndex = themes.length - 1;
    let randomIndex = Math.floor(Math.random() * maxIndex);
    this._activeTheme = themes[randomIndex];
  }

  public setTheme = (id: number) => { 
    if (this._activeTheme.id == id) {
      return;
    }

    this._activeTheme = themes[id];
  }
}

