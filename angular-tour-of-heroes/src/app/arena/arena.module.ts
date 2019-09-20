import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArenaComponent } from './arena/arena.component';
import { BadguysModule } from '../bad-guys/bad-guys.module';

@NgModule({
  declarations: [ArenaComponent],
  imports: [CommonModule, BadguysModule]
})
export class ArenaModule {}
