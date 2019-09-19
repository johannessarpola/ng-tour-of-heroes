import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { BadguysModule } from "./bad-guys/bad-guys.module";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { TickerComponent } from "./ticker/ticker.component";
import { TickerService } from "./ticker.service";
import { Observable } from "rxjs";
import { LevelUpComponent } from "./heroes/level-up/level-up.component";

class MockTickerService {
  constructor() {}
  getTicker(start: number) {
    return Observable.create(subs => {
      subs.next(1);
      subs.next(2);
      subs.next(3);
    });
  }
}

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        LifecycleComponent,
        TickerComponent,
        LevelUpComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BadguysModule,
        ReactiveFormsModule
      ],
      providers: [
        HeroService,
        MessageService,
        { provide: TickerService, useClass: MockTickerService }
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tour of Heroes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Tour of Heroes");
  }));

  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Tour of Heroes"
    );
  }));
});
