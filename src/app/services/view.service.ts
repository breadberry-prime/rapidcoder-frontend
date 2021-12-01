import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private _activeTheme = "dracula.css"

  constructor() {
    this.loadTheme()
  }

  private loadTheme = () => {
    const head = document.getElementsByTagName("head")[0]

    const link = document.createElement("link")
    link.href = "/assets/themes/" + this._activeTheme
    link.type = "text/css";
    link.rel = "stylesheet"

    head.appendChild(link)
  }

  public setTheme= (themeID: string) => {}
}

