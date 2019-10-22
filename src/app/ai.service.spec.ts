import { TestBed } from '@angular/core/testing';

import { AIService } from './ai.service';

describe('AIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AIService = TestBed.get(AIService);
    expect(service).toBeTruthy();
  });
});
