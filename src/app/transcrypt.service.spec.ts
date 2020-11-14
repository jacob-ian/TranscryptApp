import { TestBed } from '@angular/core/testing';

import { TranscryptService } from './transcrypt.service';

describe('TranscryptService', () => {
  let service: TranscryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
