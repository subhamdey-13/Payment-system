import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CardPaymentFormat } from '../interfaces/card-payment-format/card-payment-format';

@Injectable()
export class CardPaymentDataService implements InMemoryDbService {
  createDb() {
    const payments = [
      {
        id: 1,
        creditCardNumber: '407812956843',
        cardHolder: 'Adam Tishler',
        expirationDate: '2022-09-21',
        securityCode: '093',
        amount: 123
      },
      {
        id: 2,
        creditCardNumber: '517812956896',
        cardHolder: 'Mike Channing',
        expirationDate: '2022-02-13',
        securityCode: '822',
        amount: 560
      },
      {
        id: 3,
        creditCardNumber: '221851249017',
        cardHolder: 'Ray Johnson',
        expirationDate: '2025-01-25',
        securityCode: '528',
        amount: 7230
      },
      {
        id: 4,
        creditCardNumber: '407854126312',
        cardHolder: 'Michael Saxton',
        expirationDate: '2025-12-07',
        securityCode: '',
        amount: 450
      },
      {
        id: 5,
        creditCardNumber: '32189142023',
        cardHolder: 'Andrew Fisher',
        expirationDate: '2027-12-18',
        securityCode: '102',
        amount: 1222
      }

    ];
    return { payments };
  }

  genId(payments: CardPaymentFormat[]): number {
    return payments.length > 0 ? Math.max(...payments.map(payments => payments.id)) + 1 : 1;
  }
}