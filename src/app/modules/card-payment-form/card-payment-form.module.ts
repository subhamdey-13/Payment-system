import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardPaymentFormComponent } from './card-payment-form.component';

const paymentRoutes: Routes = [
  {
    path: '',
    component: CardPaymentFormComponent
  }
];

@NgModule({
  declarations: [CardPaymentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(paymentRoutes)
  ]
})
export class CardPaymentFormModule { }
