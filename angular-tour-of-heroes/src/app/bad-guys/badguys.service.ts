import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Badguy } from "./badguy";

@Injectable({
  providedIn: "root"
})
export class BadguysService {
  constructor() {}

  getBadGuys(): Observable<Badguy[]> {
    const bg: Badguy = { id: 1, name: "name", masterPlan: "noplan" };
    return of([bg, bg]);
  }
}
