import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Dr Nice", level: 10 },
      { id: 12, name: "Narco", level: 13 },
      { id: 13, name: "Bombasto", level: 1 },
      { id: 14, name: "Celeritas", level: 3 },
      { id: 15, name: "Magneta", level: 8 },
      { id: 16, name: "RubberMan", level: 33 },
      { id: 17, name: "Dynama", level: 12 },
      { id: 18, name: "Dr IQ", level: 19 },
      { id: 19, name: "Magma", level: 24 },
      { id: 20, name: "Tornado", level: 28 }
    ];
    return { heroes };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
