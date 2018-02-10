import { TestBed, inject } from '@angular/core/testing';

import { CoEditingService } from './co-editing.service';

describe('CoEditingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoEditingService]
    });
  });

  it('should be created', inject([CoEditingService], (service: CoEditingService) => {
    expect(service).toBeTruthy();
  }));
});
