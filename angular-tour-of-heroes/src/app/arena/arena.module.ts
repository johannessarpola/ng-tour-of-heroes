import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArenaComponent } from './arena/arena.component';
import { BadguysModule } from '../bad-guys/bad-guys.module';
import { HeroesModule } from '../heroes/heroes.module';
import { OpponentComponent } from './opponent/opponent.component';

@NgModule({
  declarations: [ArenaComponent, OpponentComponent],
  imports: [CommonModule, BadguysModule, HeroesModule],
  exports: [ArenaComponent, OpponentComponent]
})
export class ArenaModule { }
