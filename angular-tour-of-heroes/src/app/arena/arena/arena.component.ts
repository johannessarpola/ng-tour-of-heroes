import { Component, OnInit } from '@angular/core';
import { FightsService } from '../fights.service';
import { HeroService } from 'src/app/hero.service';
import { BadguysService } from 'src/app/bad-guys/badguys.service';
import { Hero } from 'src/app/heroes/hero';
import { take } from 'rxjs/operators';
import { Badguy } from 'src/app/bad-guys/badguy';
import { Attack } from '../attack';
import { Defense } from '../defense';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  history: string[] = [];
  constructor(private fightService: FightsService,
    private heroService: HeroService,
    private badguyService: BadguysService) { }

  subscriptions: Subscription[] = [];
  opponentA: Hero;
  opponentB: Badguy;

  attack(attack: Attack) {
    this.fightService.doAttack(attack);
  }

  defend(defense: Defense) {
    this.fightService.doDefend(defense);
  }

  stopBattle() {
    this.history = [];
    this.subscriptions.forEach( s => {
      s.unsubscribe();
    });
    this.afterBattle();
  }

  afterBattle() {
    console.log("Fight has finished!");
  }

  startBattle() {

    const attacks = this.fightService.attacks$.subscribe(m => {
      this.history.push(JSON.stringify(m));
    });
    const defenses = this.fightService.defenses$.subscribe(m => {
      this.history.push(JSON.stringify(m));
    });

    this.subscriptions.push(attacks);
    this.subscriptions.push(defenses);
  }

  ngOnInit() {
    this.history.push('Battle starts ...');

    this.heroService.getHero(11).subscribe(h => {
      this.history.push("Hero has arrived: " + JSON.stringify(h));
      this.opponentA = h;
    });
    this.badguyService.getBadGuys().pipe(take(1)).subscribe(bg => {
      this.history.push("Badguy has arrived: " + JSON.stringify(bg));

      this.opponentB = bg;
    });

    this.startBattle();

  }


}
