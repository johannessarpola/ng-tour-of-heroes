import { TestBed } from "@angular/core/testing";

import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientModule } from "@angular/common/http";

describe("HeroService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, MessageService],
      imports: [HttpClientModule]
    });
  });

  it("should be created", () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
