import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroSearchComponent } from "./hero-search.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { HeroService } from "../../hero.service";
import { MessageService } from "../../message.service";

describe("HeroSearchComponent", () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
      providers: [HeroService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
