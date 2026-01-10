import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Paymentservice {
 
  makePayment(data: any): Observable<any> {
    return of({
      status: 'SUCCESS',
      transactionId: 'TXN' + Math.floor(Math.random() * 1000000),
      message: 'Payment completed successfully'
    }).pipe(delay(1500));
  }
}