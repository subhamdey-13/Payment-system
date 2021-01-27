import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CardPaymentDataService } from './data/card-payment-data.service';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UtilityServiceService } from './services/utility-service/utility-service.service';
// import { PaymentEffects, paymentInitialState, paymentReducer } from './state/payment-state/payment-effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      CardPaymentDataService, { dataEncapsulation: false }
    ),
    // StoreModule.forRoot({}),
    // StoreModule.forFeature('payments', paymentReducer, { initialState: paymentInitialState }),
    // EffectsModule.forRoot([]),
    // EffectsModule.forFeature([PaymentEffects]),
    AppRoutingModule,
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
