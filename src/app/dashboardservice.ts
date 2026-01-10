import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dashboardservice {
  
  getUserDetails(): Observable<any> {
    return of({
      name: 'Sireeshan',
      location: 'Gundlupet, Karnataka'
    }).pipe(delay(500));
  }

  getPendingPayment(): Observable<any> {
    return of({
      amount: 4213451,
      dueDate: '18th Jan 2026'
    }).pipe(delay(500));
  }

  getBills(): Observable<any[]> {
    return of([
      { month: 'January', unit: 124, charge: 432524 },
      { month: 'February', unit: 98, charge: 389210 },
      { month: 'March', unit: 110, charge: 410000 },
      { month: 'April', unit: 105, charge: 398450 }
    ]).pipe(delay(800));
  }
}

