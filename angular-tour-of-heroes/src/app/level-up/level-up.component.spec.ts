import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpComponent } from './level-up.component';

describe('LevelUpComponent', () => {
  let component: LevelUpComponent<string>;
  let fixture: ComponentFixture<LevelUpComponent<string>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LevelUpComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
