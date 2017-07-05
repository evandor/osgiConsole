import { TestBed, inject } from '@angular/core/testing';

import { AppGlobalsService } from './app-globals.service';

describe('AppGlobalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGlobalsService]
    });
  });

  it('should be created', inject([AppGlobalsService], (service: AppGlobalsService) => {
    expect(service).toBeTruthy();
  }));
});
