import { TestBed } from '@angular/core/testing';

import { MobileservService } from './mobileserv.service';

describe('MobileservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileservService = TestBed.get(MobileservService);
    expect(service).toBeTruthy();
  });
});
