import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Badguy } from "./badguy";

@Injectable({
  providedIn: "root"
})
export class BadguysService {
  constructor() {}

  getBadGuys(): Observable<Badguy> {
    const thanos: Badguy = { id: 1, name: "Thanos", masterPlan: "Extinction" };
    const loki: Badguy = { id: 2, name: "Loki", masterPlan: "AcquirePower" };

    const observable = Observable.create(subscriber => {
      subscriber.next(thanos);
      setTimeout(() => {
        subscriber.next(loki);
        subscriber.complete();
      }, 2000);
    });

    return observable;
  }
}
