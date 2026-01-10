import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Complaintservice {
  getActiveComplaint() {
    throw new Error('Method not implemented.');
  }
  getAllComplaints() {
    throw new Error('Method not implemented.');
  }
 
  submitComplaint(data: any): Observable<any> {
    console.log('Mock API received complaint:', data);

    return of({
      status: 'SUCCESS',
      message: 'Complaint registered successfully'
    }).pipe(delay(1000)); // simulate API delay
  }
}
