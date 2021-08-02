import { TestBed } from '@angular/core/testing';

import { LlamadasService } from './llamadas.service';

describe('LlamadasService', () => {
  let service: LlamadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
