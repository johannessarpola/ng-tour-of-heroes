import { Component, OnInit } from "@angular/core";
import { BadguysService } from "../badguys.service";
import { Badguy } from "../badguy";

@Component({
  selector: "app-bad-guys",
  templateUrl: "./bad-guys.component.html",
  styleUrls: ["./bad-guys.component.css"]
})
export class BadGuysComponent implements OnInit {
  constructor(private badGuyService: BadguysService) {}
  badguys: Badguy[];

  delete() {
    console.log("delete()");
  }

  ngOnInit() {
    this.badGuyService.getBadGuys().subscribe(bgs => {
      this.badguys = bgs;
    });
  }
}
