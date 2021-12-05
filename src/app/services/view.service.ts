import { Injectable, OnInit, ViewChild } from '@angular/core';
import { themeInterface } from '../interfaces/theme.interface';
import { themes } from '../data/themes';
import hljs from "highlight.js";


@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private _activeTheme: themeInterface;

  constructor() {
    this.setRandomTheme();
    this.loadTheme();
  }

  public refactoring = (code: string, language): HTMLElement => {
    const codeLines = code.split("\n")
    let indexOfLetter = 0;

    const wrapper = document.createElement("code")
    wrapper.setAttribute("class", "codeWrapper")

    codeLines.forEach(codeLine => {
      const codeLineWrapper = document.createElement("div")
      codeLineWrapper.setAttribute("class", "codeLine")

      const highlightedLine = hljs.highlight(codeLine, {language})
      const node = new DOMParser().parseFromString(highlightedLine.value, "text/html")

      const codeBlocks: NodeListOf<ChildNode> = node.getElementsByTagName("Body")[0].childNodes

      codeBlocks.forEach(codeBlock => {
        const codeWrapper = document.createElement("div")
        codeWrapper.setAttribute("class", "codeWrapper")

        // @ts-ignore
        const codeBlockValue = codeBlock.nodeValue ? codeBlock.nodeValue: codeBlock.innerText
        // @ts-ignore
        const codeBlockClass = codeBlock.nodeValue ? undefined: codeBlock.className

        for (const letter of codeBlockValue) {
          const span = document.createElement("span")
          span.innerText = letter
          span.setAttribute("id", indexOfLetter.toString())
          // @ts-ignore
          span.setAttribute("class", codeBlockClass)
          codeWrapper.appendChild(span)

          indexOfLetter++;
        }
        codeLineWrapper.appendChild(codeWrapper)
      })
      wrapper.appendChild(codeLineWrapper)
    })

    return wrapper
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

