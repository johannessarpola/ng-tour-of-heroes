import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { Hero } from "src/app/hero";

@Component({
  selector: "app-level-up",
  templateUrl: "./level-up.component.html",
  styleUrls: ["./level-up.component.css"]
})
export class LevelUpComponent implements OnInit {
  @Input() hero: Hero;
  @Output() leveledUp = new EventEmitter<Hero>();

  maxLevel = 100;
  constructor() {}

  levelUp() {
    if (this.hero.level < this.maxLevel) {
      this.leveledUp.next(this.hero);
    }
  }
  ngOnInit() {}
}
