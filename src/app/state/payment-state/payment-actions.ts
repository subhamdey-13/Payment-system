import { CardPaymentFormat } from '../../interfaces/card-payment-format/card-payment-format';
import { Store, Action, ofAction } from 'ngrx-actions';
import { Injectable } from '@angular/core';

export class AddCardPayment {
   readonly type = 'Add Payment';
   constructor(public payload: CardPaymentFormat) {}
}

export class AddCardPaymentSuccess {
   readonly type = 'Add Payment Success';
   constructor(public payload: CardPaymentFormat) {}
}

export class GetCardPayments {
  readonly type = 'Get Payments';
}

export class GetCardPaymentsSuccess {
  readonly type = 'Get Payment Success';
  constructor(public payload: CardPaymentFormat[]) {}
}

export class GetCardPaymentsFailure{
  readonly type = 'Get Payment Failure';
}

@Store({ payments: [] })
@Injectable()
export class PaymentStore {
      @Action(AddCardPayment)
      addCardPayment(){};

      @Action(AddCardPaymentSuccess)
      addCardPaymentSuccess(state, { payload }) 
      { state.payments.push(payload) };

      @Action(GetCardPayments)
      getCardPayments() {};

      @Action(GetCardPaymentsSuccess)
      getCardPaymentsSuccess(state, {payload})
      { state.payments = payload };

      @Action(GetCardPaymentsFailure)
      getCardPaymentsFailure() {};
}
