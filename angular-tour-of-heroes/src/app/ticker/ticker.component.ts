import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  SimpleChanges
} from "@angular/core";
import { TickerService } from "../ticker.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-ticker",
  templateUrl: "./ticker.component.html",
  styleUrls: ["./ticker.component.css"]
})
export class TickerComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private tickerService: TickerService) {}

  @Input() startTick: number = 1;
  ticker: Observable<number>;
  tickerSubscription: Subscription;
  currentTick: number;

  createTicker() {
    if (this.tickerSubscription) {
      this.tickerSubscription.unsubscribe();
    }
    this.ticker = this.tickerService.getTicker(this.startTick);
    this.tickerSubscription = this.ticker.subscribe(v => {
      this.currentTick = v;
    });
  }
  startAt(n: number): void {
    this.startTick = n;
    this.createTicker();
  }

  ngOnInit(): void {
    this.createTicker();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges");
    this.startTick = parseInt(changes.startTick.currentValue);
    this.createTicker();
  }
  ngOnDestroy(): void {
    console.log("TickerComponent.ngOnDestroy");
    this.tickerSubscription.unsubscribe();
  }
}
