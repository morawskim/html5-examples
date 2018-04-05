import { TestBed, inject } from '@angular/core/testing';

import { AppConfigurationServiceService } from './app-configuration-service.service';

describe('AppConfigurationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfigurationServiceService]
    });
  });

  it('should be created', inject([AppConfigurationServiceService], (service: AppConfigurationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
