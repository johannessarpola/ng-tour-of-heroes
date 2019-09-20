import { Component, OnInit, Input } from '@angular/core';
import { FightsService } from '../fights.service';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css']
})
export class OpponentComponent implements OnInit {

  constructor(private fightService: FightsService) { }

  ngOnInit() {
  }
  attack() {
    this.fightService.doAttack( { knockback : 1, damage : 1, id : "kick" });
  }
  defend() {
    this.fightService.doDefend( { id : 'shield', blocked : false, parry : false, damage : 1});
  }
}
