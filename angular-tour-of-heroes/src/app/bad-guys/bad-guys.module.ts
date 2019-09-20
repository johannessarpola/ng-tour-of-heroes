import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadguysComponent } from './bad-guys.component';
import { BadguysService } from './badguys.service';
import { RealthreatDirective } from './realthreat.directive';
import { FormsModule } from '@angular/forms';
import { UnlessDirective } from './unless.directive';
import { BadguyComponent } from './badguy/badguy.component';
import { LevelUpComponent } from '../level-up/level-up.component';
import { AppModule } from '../app.module';
import { LevelUpModule } from '../level-up/level-up.module';

@NgModule({
  declarations: [
    BadguysComponent,
    RealthreatDirective,
    UnlessDirective,
    BadguyComponent
  ],
  imports: [CommonModule, FormsModule, LevelUpModule],
  providers: [BadguysService],
  exports: [BadguysComponent]
})
export class BadguysModule {}
