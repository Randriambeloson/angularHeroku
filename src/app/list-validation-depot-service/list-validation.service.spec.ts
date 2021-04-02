import { TestBed } from '@angular/core/testing';

import { ListValidationService } from './list-validation.service';

describe('ListValidationService', () => {
  let service: ListValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
