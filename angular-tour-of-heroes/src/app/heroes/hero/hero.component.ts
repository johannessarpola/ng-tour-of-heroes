import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() {}

  @Input() hero: Hero;
  @Output() heroUpdated = new EventEmitter<Hero>();
  ngOnInit() {}
  onLevelUp(hero: Hero) {
    this.hero = { ...this.hero, level: this.hero.level + 1 };
    this.heroUpdated.emit(this.hero);
  }
}
