import { Injectable } from '@angular/core';
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

