import { TestBed } from '@angular/core/testing';

import { Guestbillservice } from './guestbillservice';

describe('Guestbillservice', () => {
  let service: Guestbillservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guestbillservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
