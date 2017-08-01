import { TestBed, inject } from '@angular/core/testing';

import { ContentWindowService } from './content-window.service';

describe('ContentWindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentWindowService]
    });
  });

  it('should be created', inject([ContentWindowService], (service: ContentWindowService) => {
    expect(service).toBeTruthy();
  }));
});
