import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {

  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      cardOwner: ['', Validators.required],
      expiryMonth: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')]],
      expiryYear: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }

  completePayment() {
    if (this.paymentForm.valid) {
      alert('Payment Successful');
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  createComplaint() {
    this.router.navigate(['/complaint']);
  }
}

