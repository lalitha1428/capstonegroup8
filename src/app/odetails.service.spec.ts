import { TestBed } from '@angular/core/testing';

import { OdetailsService } from './odetails.service';

describe('OdetailsService', () => {
  let service: OdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
