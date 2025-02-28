import { Component, OnInit } from "@angular/core";
import { BadguysService } from "./badguys.service";
import { Badguy } from "./badguy";
import { timeout, takeWhile, takeUntil } from "rxjs/operators";
import { timer } from "rxjs";

@Component({
  selector: "app-bad-guys",
  templateUrl: "./bad-guys.component.html",
  styleUrls: ["./bad-guys.component.css"]
})
export class BadguysComponent implements OnInit {
  constructor(private badGuyService: BadguysService) {}
  badguys: Badguy[] = [];
  badguy: Badguy;
  extinctionColor: "red";
  dominationColor: "violet";
  maxPower: boolean;
  conditionFalse = false;
  conditionTrue = true;

  delete() {
    console.log("delete()");
  }

  ngOnInit() {
    const timeoutTimer = timer(5000);
    this.badGuyService
      .getBadGuys()
      .pipe(takeUntil(timeoutTimer))
      .subscribe(bg => {
        this.badguys.push(bg);
      });
  }
}
