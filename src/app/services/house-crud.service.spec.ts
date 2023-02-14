import { TestBed } from '@angular/core/testing';

import { HouseCrudService } from './house-crud.service';

describe('HouseCrudService', () => {
  let service: HouseCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
