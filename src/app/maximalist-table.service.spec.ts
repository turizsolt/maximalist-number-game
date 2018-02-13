import { TestBed, inject } from '@angular/core/testing';

import { MaximalistTableService } from './maximalist-table.service';

describe('MaximalistTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaximalistTableService]
    });
  });

  it('should be created', inject([MaximalistTableService], (service: MaximalistTableService) => {
    expect(service).toBeTruthy();
  }));
});
