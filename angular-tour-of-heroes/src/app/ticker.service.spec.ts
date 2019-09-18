import { TestBed } from "@angular/core/testing";

import { TickerService } from "./ticker.service";

describe("TickerServiceService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TickerService]
    })
  );

  it("should be created", () => {
    const service: TickerService = TestBed.get(TickerService);
    expect(service).toBeTruthy();
  });
});
