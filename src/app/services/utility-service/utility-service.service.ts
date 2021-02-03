import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CardPaymentFormat } from '../../interfaces/card-payment-format/card-payment-format';

@Injectable()
export class UtilityServiceService {
  private paymentURL = 'api/payments';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private notificationService: ToastrService) { }

  getCardPayments(): Observable<CardPaymentFormat[]> {
    return this.http.get<CardPaymentFormat[]>(this.paymentURL).pipe(
      tap(_ => {
        this.createNotification('Fetched Payment Transactions', 'Get Payment', 'success');
      })
    );
  }

  addCardPayment(card: CardPaymentFormat): Observable<CardPaymentFormat> {
    return this.http.post<CardPaymentFormat>(this.paymentURL, card, this.httpOptions).pipe(
      tap(_ => {
        this.createNotification('Transaction Processed successfully', 'Add Payment', 'success');
      })
    );
  }

  createNotification(content: string, title, notificationType: string) {
    let timeout = 13000;
    switch (notificationType) {
      case 'success':
        this.notificationService.success(content, title, {
          timeOut: timeout
        });
        break;

      case 'error':
        this.notificationService.error(content, title, {
          timeOut: timeout
        });
        break;

      case 'info':
        this.notificationService.info(content, title, {
          timeOut: timeout
        });
        break;

      case 'warning':
        this.notificationService.warning(content, title, {
          timeOut: timeout
        });
        break;

    }
  }
}
