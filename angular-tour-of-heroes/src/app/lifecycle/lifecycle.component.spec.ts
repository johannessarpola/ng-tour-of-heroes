import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LifecycleComponent } from "./lifecycle.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("LifecycleComponent", () => {
  let component: LifecycleComponent;
  let fixture: ComponentFixture<LifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LifecycleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
