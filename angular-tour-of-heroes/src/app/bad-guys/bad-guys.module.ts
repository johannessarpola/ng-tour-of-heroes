import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadguysComponent } from "./bad-guys.component";
import { BadguysService } from "./badguys.service";
import { RealthreatDirective } from './realthreat.directive';

@NgModule({
  declarations: [BadguysComponent, RealthreatDirective],
  imports: [CommonModule],
  providers: [BadguysService],
  exports: [BadguysComponent]
})
export class BadguysModule { }
