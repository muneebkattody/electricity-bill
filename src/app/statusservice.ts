import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Statusservice {

  private complaints = [
    {
      id: 1,
      title: 'Electric Short Circuit in Gachibowli',
      status: 'Electrician Assigned',
      openedDate: '29th Jan 2026',
      active: true
    },
    {
      id: 2,
      title: 'Electric Short Circuit in Gachibowli',
      status: 'Closed',
      openedDate: '29th Jan 2026',
      active: false
    },
    {
      id: 3,
      title: 'Electric Short Circuit in Gachibowli',
      status: 'Open',
      openedDate: '29th Jan 2026',
      active: false
    },
    {
      id: 4,
      title: 'Electric Short Circuit in Gachibowli',
      status: 'Closed',
      openedDate: '29th Jan 2026',
      active: false
    }
  ];

  getActiveComplaint(): Observable<any> {
    return of(this.complaints.find(c => c.active));
  }

  getAllComplaints(): Observable<any[]> {
    return of(this.complaints);
  }
}
