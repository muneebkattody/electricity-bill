import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  imports: [],
  templateUrl: './paymentsuccess.html',
  styleUrl: './paymentsuccess.css',
})
export class Paymentsuccess {

  transactionId!: number;
  message!: string;

  constructor(private router: Router) {
    const state = history.state;
    this.transactionId = state.transactionId;
    this.message = state.message;
  }

  goDashboard() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  createComplaint() {
    this.router.navigate(['/complaint']);
  }
}