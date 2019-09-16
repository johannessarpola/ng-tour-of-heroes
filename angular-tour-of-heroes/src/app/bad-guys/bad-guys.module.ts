import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadGuysComponent } from "./bad-guys/bad-guys.component";
import { BadguysService } from "./badguys.service";

@NgModule({
  declarations: [BadGuysComponent],
  imports: [CommonModule],
  providers: [BadguysService]
})
export class BadGuysModule {}
