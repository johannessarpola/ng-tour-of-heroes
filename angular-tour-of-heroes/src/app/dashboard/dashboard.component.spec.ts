import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroesComponent } from "../heroes/heroes.component";
import { HeroSearchComponent } from "../hero-search/hero-search.component";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { LevelUpComponent } from "../heroes/level-up/level-up.component";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        LevelUpComponent,
        HeroesComponent,
        HeroSearchComponent
      ],
      providers: [HeroService, MessageService],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
