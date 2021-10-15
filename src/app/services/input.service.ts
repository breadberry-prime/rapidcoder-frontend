import {HostListener, Injectable} from '@angular/core';
import { fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() {
    this.initEventLister()
  }
  private keyDownHandler = () => {

  }

  private initEventLister = () => {
    document.addEventListener("keydown", (e) => {});
  }
}
