import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  NgModule
} from '@angular/core';
import { LevelUpComponent } from './level-up.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LevelUpComponent],
  imports: [CommonModule],
  providers: [],
  exports: [LevelUpComponent]
})
export class LevelUpModule {}
