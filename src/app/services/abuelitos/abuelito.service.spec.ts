import { TestBed } from '@angular/core/testing';

import { AbuelitoService } from './abuelito.service';

describe('AbuelitoService', () => {
  let service: AbuelitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbuelitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
