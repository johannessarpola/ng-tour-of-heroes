import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RealthreatDirective } from './realthreat.directive';
import { ElementRef, Injectable } from '@angular/core';

let mockNativeElement = {
  style: {
    color: 'white'
  }
}

@Injectable()
export class MockElementRef {
  nativeElement = mockNativeElement;
  constructor() { }

}

describe('RealthreatDirective', () => {
  it('should create an instance', () => {
    const directive = new RealthreatDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
