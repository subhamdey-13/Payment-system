// import { Injectable } from '@angular/core';
// import { ofAction, createReducer } from 'ngrx-actions';
// import { Store } from '@ngrx/store';
// import { Effect, Actions, ofType } from '@ngrx/effects';
// import { PaymentStore, AddCardPayment,AddCardPaymentSuccess,GetCardPayments, GetCardPaymentsSuccess, GetCardPaymentsFailure } from './payment-actions';
// import { map, switchMap } from 'rxjs/operators';
// import { UtilityServiceService } from '../../services/utility-service/utility-service.service';

// @Injectable()
// export class PaymentEffects {
//   constructor(
//     private store: Store<any>,
//     private action$: Actions,
//     private utilityService: UtilityServiceService) {}

// @Effect()
// addPayment$ = this.action$.pipe(
//   ofAction(AddCardPayment),
//   switchMap(payment => this.utilityService.addCardPayment(payment.payload)),
//   map(response => new AddCardPaymentSuccess(response)));


// @Effect()
// getPayments$ = this.action$.pipe(
//   ofAction(GetCardPayments),
//   switchMap(hero => this.utilityService.getCardPayments().pipe(
//     map(response =>{
//       if(response.length > 0){
//         return new GetCardPaymentsSuccess(response)
//       }
//       else
//       {
//         console.log("Failure!");
//         return new GetCardPaymentsFailure()
//       }
//     })
//   )));
// }

// export const paymentReducer = createReducer(PaymentStore);
// export const paymentInitialState = { payments: []};
