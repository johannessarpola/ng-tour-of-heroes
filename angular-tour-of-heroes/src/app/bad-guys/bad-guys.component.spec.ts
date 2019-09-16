import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadguysComponent } from './bad-guys.component';
import { BadguysService } from './badguys.service';
import { RealthreatDirective } from './realthreat.directive';
import { CommonModule } from '@angular/common';
import { BadguysModule } from './bad-guys.module';

describe('BadguysComponent', () => {
  let component: BadguysComponent;
  let fixture: ComponentFixture<BadguysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BadguysComponent, RealthreatDirective],
      providers: [BadguysService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadguysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
