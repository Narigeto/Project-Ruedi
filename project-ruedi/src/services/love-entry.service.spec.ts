import { TestBed } from '@angular/core/testing';

import { LoveEntryService } from './love-entry.service';

describe('LoveEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoveEntryService = TestBed.get(LoveEntryService);
    expect(service).toBeTruthy();
  });
});
