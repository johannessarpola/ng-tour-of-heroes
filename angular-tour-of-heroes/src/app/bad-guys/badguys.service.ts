import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Badguy } from "./badguy";
import { timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BadguysService {
  constructor() {}

  getBadGuys(): Observable<Badguy> {
    const thanos: Badguy = {
      id: 1,
      name: "Thanos",
      masterPlan: "UniverseExtinction"
    };
    const loki: Badguy = { id: 2, name: "Loki", masterPlan: "AcquirePower" };
    const hel: Badguy = { id: 3, name: "Hel", masterPlan: "ConquerÅsgard" };
    const galactus: Badguy = {
      id: 4,
      name: "Galactus",
      masterPlan: "GalacticDomination"
    };
    const ultron: Badguy = {
      id: 5,
      name: "Ultron",
      masterPlan: "TooSlowToMatter"
    };

    const observable = Observable.create(subscriber => {
      subscriber.next(thanos);
      setTimeout(() => {
        subscriber.next(loki);
      }, 2000);
      setTimeout(() => {
        subscriber.next(hel);
      }, 1000);
      subscriber.next(galactus);
      setTimeout(() => {
        subscriber.next(ultron);
      }, 6000);
    });

    return observable;
  }
}
