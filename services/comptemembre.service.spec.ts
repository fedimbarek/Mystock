import { TestBed } from '@angular/core/testing';

import { ComptemembreService } from './comptemembre.service';

describe('ComptemembreService', () => {
  let service: ComptemembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptemembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
