import { TestBed } from '@angular/core/testing';

import { Hausino2Service } from './hausino2.service';

describe('Hausino2Service', () => {
  let service: Hausino2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hausino2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
