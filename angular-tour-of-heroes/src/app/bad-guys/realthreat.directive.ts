import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appRealthreat]"
})
export class RealthreatDirective {
  el: ElementRef;
  originalTextColor: string;

  @Input("appRealthreat") threatColor: string;
  @Input() defaultThreatColor: string;

  constructor(el: ElementRef) {
    this.originalTextColor = el.nativeElement.style.color;
    this.el = el;
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.textColor(this.threatColor || this.defaultThreatColor || "red");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.textColor(this.originalTextColor);
  }
  textColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
