import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { HeroSearchComponent } from "../hero-search/hero-search.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "../message.service";
import { LevelUpComponent } from "../level-up/level-up.component";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, LevelUpComponent, HeroSearchComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
      providers: [HeroService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
