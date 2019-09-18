import { Injectable } from "@angular/core";
import { Observable, interval, timer } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TickerService {
  constructor() {}

  getTicker(start: number) {
    return timer(0, 1000).pipe(
      map(x => x + (start || 1)) // to start from 1 instead of 0
    );
  }
}
