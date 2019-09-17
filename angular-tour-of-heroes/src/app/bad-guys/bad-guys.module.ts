import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadguysComponent } from "./bad-guys.component";
import { BadguysService } from "./badguys.service";
import { RealthreatDirective } from "./realthreat.directive";
import { FormsModule } from "@angular/forms";
import { UnlessDirective } from "./unless.directive";

@NgModule({
  declarations: [BadguysComponent, RealthreatDirective, UnlessDirective],
  imports: [CommonModule, FormsModule],
  providers: [BadguysService],
  exports: [BadguysComponent]
})
export class BadguysModule {}
