import { TestBed } from '@angular/core/testing';

import { Sort.ServiceService } from './sort.service.service';

describe('Sort.ServiceService', () => {
  let service: Sort.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sort.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
