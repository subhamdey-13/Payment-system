import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardPaymentFormat } from '../../interfaces/card-payment-format/card-payment-format';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UtilityServiceService } from '../../services/utility-service/utility-service.service';
import { Store } from '@ngrx/store';
import { AddCardPayment } from '../../state/payment-state/payment-actions';

@Component({
  selector: 'app-card-payment-form',
  templateUrl: './card-payment-form.component.html',
  styleUrls: ['./card-payment-form.component.scss']
})
export class CardPaymentFormComponent implements OnInit {
  cardDetails: CardPaymentFormat = {
    id: null,
    creditCardNumber: null,
    cardHolder: null,
    expirationDate: null,
    securityCode: null,
    amount: null
  };
  cardDetailForm;
  minDate: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dateParser: NgbDateParserFormatter,
    private utilityService: UtilityServiceService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    let minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    this.minDate = this.dateParser.parse(this.convertDateToyyyymmdd(minDate, true));

    this.cardDetailForm = this.fb.group({
      'creditCardNumber': new FormControl(this.cardDetails.creditCardNumber, [Validators.required, Validators.pattern(/^[1-9][0-9]{11}$/)]),
      'cardHolder': new FormControl(this.cardDetails.cardHolder, [Validators.required, Validators.pattern(/^[a-zA-Z '.-]*$/)]),
      'expirationDate': new FormControl(this.cardDetails.expirationDate, [Validators.required]),
      'securityCode': new FormControl(this.cardDetails.securityCode, [Validators.pattern(/^[0-9]{3}$|^$|^\s$/)]),
      'amount': new FormControl(this.cardDetails.amount, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    });
  }

  onChanges() {
    if (typeof this.cardDetails.expirationDate === 'string') {
      this.utilityService.createNotification('Please Select Date from Datepicker', 'Info', 'info');
      this.cardDetails.expirationDate = null;
    }

  }

  convertDateToyyyymmdd(date, isDate?): any {
    if (!isDate) {
      date = new Date(date.year, date.month - 1, date.day);
    }
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();
    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
  }

  addPayment() {
    const params = {
      id: null,
      creditCardNumber: this.cardDetails.creditCardNumber,
      cardHolder: this.cardDetails.cardHolder,
      expirationDate: this.convertDateToyyyymmdd(this.cardDetails.expirationDate),
      securityCode: this.cardDetails.securityCode,
      amount: Number(this.cardDetails.amount),
    }

    this.store.dispatch(new AddCardPayment(params as CardPaymentFormat));
    this.store.select('payments').subscribe(store => {
      if (store.payment) {
        this.router.navigate(['/dashboard']);
      }
    });
    // this.utilityService.addCardPayment(params as CardPaymentFormat)
    //   .subscribe(payment => {
    //     if (payment) {
    //       this.router.navigate(['/dashboard']);
    //     }
    //   });
  }

}
