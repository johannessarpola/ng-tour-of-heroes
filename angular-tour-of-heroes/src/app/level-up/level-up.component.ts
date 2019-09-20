import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.css']
})
export class LevelUpComponent implements OnInit {
  @Input() hasLevel: HasLevel;
  @Output() leveledUp = new EventEmitter<HasLevel>();

  maxLevel = 100;
  constructor() {}

  levelUp() {
    if (this.hasLevel.level < this.maxLevel) {
      const updated = { ...this.hasLevel, level: this.hasLevel.level + 1 };
      this.leveledUp.next(updated);
    }
  }
  ngOnInit() {}
}
