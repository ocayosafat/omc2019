import { TestBed } from '@angular/core/testing';

import { MySeatingService } from './my-seating.service';

describe('MySeatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySeatingService = TestBed.get(MySeatingService);
    expect(service).toBeTruthy();
  });
});
