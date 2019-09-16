import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadGuysComponent } from "./bad-guys/bad-guys.component";
import { BadguysService } from "./badguys.service";
import { RealthreatDirective } from './realthreat.directive';

@NgModule({
  declarations: [BadGuysComponent, RealthreatDirective],
  imports: [CommonModule],
  providers: [BadguysService]
})
export class BadGuysModule {}
