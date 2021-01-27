import { Component, OnInit } from '@angular/core';
import { CardPaymentFormat } from '../../interfaces/card-payment-format/card-payment-format';
import { UtilityServiceService } from '../../services/utility-service/utility-service.service';
import { CardPaymentFormModule } from '../card-payment-form/card-payment-form.module';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  payments: CardPaymentFormModule[] = []
  constructor(private utilityService: UtilityServiceService) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(){
    this.utilityService.getCardPayments().subscribe(payments => this.payments = payments);
  }

}
