import { Injectable } from '@angular/core';
import { Attack } from './attack';
import { Defense } from './defense';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightsService {
  constructor() {}
  private attacksSoure = new Subject<Attack>();
  private defensesSource = new Subject<Defense>();

  attacks$ = this.attacksSoure.asObservable();
  defenses$ = this.defensesSource.asObservable();

  doAttack(attack: Attack) {
    this.attacksSoure.next(attack);
  }

  doDefend(defense: Defense) {
    this.defensesSource.next(defense);
  }
}
