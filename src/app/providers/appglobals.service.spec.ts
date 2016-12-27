/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppglobalsService } from './appglobals.service';

import { ConfigService } from '../providers/config.service';


describe('AppglobalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppglobalsService,ConfigService]
    });
  });

  it('should ...', inject([AppglobalsService], (service: AppglobalsService) => {
    expect(service).toBeTruthy();
  }));
});
