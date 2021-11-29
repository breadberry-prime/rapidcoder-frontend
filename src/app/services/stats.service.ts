import {Injectable, OnInit} from '@angular/core';
import {InputService} from "./input.service";
import {PressedLetterInterface} from "../interfaces/pressed-letter.interface";

@Injectable({
  providedIn: 'root'
})
export class StatsService implements OnInit{

  constructor(
      private inputService: InputService
  ) { }

  ngOnInit() {
    this.inputService.eventObservable.subscribe()
  }

  private eventManager(LetterUpdate: PressedLetterInterface) {
    // TODO: Handle events from emitter
  }

}
