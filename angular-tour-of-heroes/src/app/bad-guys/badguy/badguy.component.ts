import { Component, OnInit, Input } from '@angular/core';
import { Badguy } from '../badguy';

@Component({
  selector: 'app-badguy',
  templateUrl: './badguy.component.html',
  styleUrls: ['./badguy.component.css']
})
export class BadguyComponent implements OnInit {
  @Input() dangerEmoji: string = '';
  @Input() badguy: Badguy;
  constructor() {}

  ngOnInit() {}
  onlevelUp(badguy: Badguy) {
    this.badguy.level = badguy.level;
  }
}
