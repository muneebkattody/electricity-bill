import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Paymentservice } from '../paymentservice';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {

  paymentForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: Paymentservice
  ) {
    this.paymentForm = this.fb.group(
      {
        cardNumber: ['', [
          Validators.required,
          Validators.pattern('^[0-9]{16}$')
        ]],

        cardOwner: ['', [
          Validators.required,
          Validators.pattern('^[A-Za-z ]+$')
        ]],

        expiryMonth: ['', [
          Validators.required,
          Validators.pattern('^(0[1-9]|1[0-2])$')
        ]],

        expiryYear: ['', [
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],

        cvv: ['', [
          Validators.required,
          Validators.pattern('^[0-9]{3}$')
        ]]
      },
      { validators: this.expiryDateValidator }
    );
  }

  // ✅ INLINE EXPIRY DATE VALIDATION
  expiryDateValidator(control: AbstractControl): ValidationErrors | null {
    const month = control.get('expiryMonth')?.value;
    const year = control.get('expiryYear')?.value;

    if (!month || !year) return null;

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = Number(today.getFullYear().toString().slice(-2));

    const expMonth = Number(month);
    const expYear = Number(year);

    if (expYear < currentYear) return { expiredCard: true };

    if (expYear === currentYear && expMonth < currentMonth) {
      return { expiredCard: true };
    }

    return null;
  }

  // ✅ FIX FOR TEMPLATE ERROR
  get isCardExpired(): boolean {
    return !!this.paymentForm.errors?.['expiredCard'];
  }

  completePayment() {
    if (this.paymentForm.invalid) return;

    this.loading = true;

    const payload = {
      ...this.paymentForm.value,
      cardOwner: this.paymentForm.value.cardOwner.trim()
    };

    this.paymentService.makePayment(payload).subscribe({
      next: (res) => {
        alert(`${res.message}\nTransaction ID: ${res.transactionId}`);
        this.loading = false;
        this.router.navigate(['/user-dashboard']);
      },
      error: () => {
        alert('Payment Failed');
        this.loading = false;
      }
    });
  }

  createComplaint() {
    this.router.navigate(['/complaint']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}