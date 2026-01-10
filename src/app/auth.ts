import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class Auth {
 
  generateOtp(phone: string): Observable<any> {
    console.log('Mock OTP sent to:', phone);
    return of({
      success: true,
      message: 'OTP Sent Successfully'
    }).pipe(delay(1000));
  }

  verifyOtp(phone: string, otp: string): Observable<any> {
    if (otp === '1234') {
      return of({ success: true }).pipe(delay(1000));
    }
    return of({ success: false, message: 'Invalid OTP' }).pipe(delay(1000));
  }
}