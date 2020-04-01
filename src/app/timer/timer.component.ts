import { Component, OnInit } from '@angular/core';
import { interval, of, Observable } from 'rxjs';
import { startWith, map, distinctUntilChanged } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  // Input dates
  startDate = new Date('2020-04-01T04:25:25.884Z');
  currentDate = new Date();
  // Timer Observable
  duration$: Observable<number>;

  constructor() {
    this.duration$ = this.getDuration(this.startDate);
  }

  // Extract duration from start to end date
  private getDuration(date: Date) {
    const timeDiff = () => moment(new Date()).diff(date);
    return interval(500).pipe(
      startWith(timeDiff()),
      map(() => timeDiff()),
      distinctUntilChanged(),
    )
  }

  // Extract difference
  gerTimeDifference(startDate: Date, endDate: Date): number {
    const diff = moment(endDate).diff(startDate);
    return diff;
  }
}
