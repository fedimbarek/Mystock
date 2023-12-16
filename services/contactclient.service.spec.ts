import { TestBed } from '@angular/core/testing';

import { ContactclientService } from './contactclient.service';

describe('ContactclientService', () => {
  let service: ContactclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
