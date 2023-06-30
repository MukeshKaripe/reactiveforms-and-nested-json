import { TestBed } from '@angular/core/testing';

import { NestedDataService } from './nested-data.service';

describe('NestedDataService', () => {
  let service: NestedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
