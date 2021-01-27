import { TestBed } from '@angular/core/testing';

import { CardPaymentDataService } from './card-payment-data.service';

describe('CardPaymentDataService', () => {
  let service: CardPaymentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPaymentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
