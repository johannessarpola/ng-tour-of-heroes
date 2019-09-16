import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appRealthreat]"
})
export class RealthreatDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
  }
}
