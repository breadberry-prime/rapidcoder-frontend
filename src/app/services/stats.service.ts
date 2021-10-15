import { Injectable } from '@angular/core';
import {GameService} from "./game.service";
import {ContextService} from "./context.service";
import {statsInterface} from "../interfaces/stats.interface";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private current_context = this.contextService.getText()
  private counter_mistakes:number = 0
  private counter_correct:number = 0
  private word_times:Array<number> = []

  constructor(
      private gameService: GameService,
      private contextService: ContextService,
      private accuracy: number,
      private start_time: number,
      private stop_time: number,
      private time_used: number,
      private keep_alive: number,
      private word_start: number,
      private wpm: number
  ) { }

  private calculateTimeUsed = () => {
    // @ts-ignore
    this.time_used = (this.stop_time - this.start_time) / 1000
  }

  private calculateAccuracy = () => {
    this.accuracy = 100 - ((100 / (this.counter_mistakes + this.counter_correct)) * this.counter_mistakes)
  }

  private calculateWPM = () => {
    // calc WPM
    let keys = this.counter_correct + this.counter_mistakes
    // @ts-ignore
    let used_time = (this.stop_time - this.start_time) / 1000

    // use 4 chars as normal word length
    this.wpm = keys / used_time * 60 / 4
  }

  private calculateWordSpeed = () => {
    // calc the time used for the word
    // @ts-ignore
    this.word_times.push((Date.now() - this.word_start) / 1000);
  }

  private startTimer = () => {
    // start timer
    this.start_time = Date.now()

    // start keep alive
    this.keep_alive = Date.now()

    // first word start
    this.word_start = Date.now()
  }

  private stopTimer = () => {
    // stop timer
    this.stop_time = Date.now()
  }

  private resetKeepAlive = () => {
    this.keep_alive = Date.now()
  }

  private wrongInput = () => {
    this.counter_mistakes++
  }

  private correctInput = () => {
    this.counter_correct++
  }

  public getStats = () => {
    let statsData: statsInterface = {
      accuracy: this.accuracy,
      correct: this.counter_correct,
      mistakes: this.counter_mistakes,
      wpm: this.wpm,
      time: this.time_used,
      time_per_word: this.word_times
    }
    return statsData
  }

  public submitInput = (first_event: boolean, last_event: boolean, correct: boolean, word_ending: boolean) => {
    // reset keep alive
    this.resetKeepAlive()

    // start / stop timer
    if (first_event){
      this.startTimer()
    }

    // count mistakes
    if (!correct){
      this.wrongInput()
    }
    else {
      this.correctInput()
    }

    // End of word
    if (word_ending){
      this.calculateWordSpeed()
      this.word_start = Date.now()
    }

    if (last_event){
      this.stopTimer()
      this.calculateWPM()
      this.calculateWordSpeed()
      this.calculateAccuracy()
      this.calculateTimeUsed()
    }

  }
}
