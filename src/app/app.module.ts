import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CardPaymentDataService } from './data/card-payment-data.service';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UtilityServiceService } from './services/utility-service/utility-service.service';
import { PaymentEffects, paymentInitialState } from './state/payment-state/payment-effects';
import {  PaymentStore } from './state/payment-state/payment-actions';
import { ofAction, createReducer } from 'ngrx-actions';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren:'./modules/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'payment-form',
    loadChildren: './modules/card-payment-form/card-payment-form.module#CardPaymentFormModule',
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

const EFFECTS = [PaymentEffects];
const _paymentReducer = createReducer(PaymentStore);
export function paymentReducer(state, action) {
  return _paymentReducer(state, action)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      CardPaymentDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({paymemt: paymentReducer}),
    StoreModule.forFeature('payments', paymentReducer, { initialState: paymentInitialState }),
    EffectsModule.forRoot(EFFECTS),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    UtilityServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
