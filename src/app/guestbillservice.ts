import { Injectable } from '@angular/core';
import { Observable, throwError, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Guestbillservice {

//   private bills = [
//     {
//       consumerId: '1234567890',
//       name: 'Ramesh',
//       month: 'Jan 2026',
//       amount: 3250
//     },
//     {
//       consumerId: '9876543210',
//       name: 'Suresh',
//       month: 'Jan 2026',
//       amount: 4180
//     }
//   ];

//   getBill(consumerId: string): Observable<any> {
//     const bill = this.bills.find(b => b.consumerId === consumerId);

//     if (bill) {
//       return of(bill).pipe(delay(1000)); // ✅ delay works now
//     } else {
//       return throwError(() => 'Consumer ID not found').pipe(delay(1000));
//     }
//   }

//   payBill(): Observable<any> {
//     return of({
//       status: 'SUCCESS',
//       txnId: Math.floor(Math.random() * 1000000)
//     }).pipe(delay(1000));
//   }
// }

  getBillByConsumerId(consumerId: string) {

    if (consumerId === '123456') {
      return of({
        consumerId: '123456',
        name: 'Sireeshan',
        amount: 4210,
        dueDate: '25 Jan 2026'
      }).pipe(delay(1000));
    }

    return throwError(() => 'Consumer ID not found')
      .pipe(delay(1000));
  }
}