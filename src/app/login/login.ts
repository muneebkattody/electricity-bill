import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDashboard } from '../user-dashboard/user-dashboard';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  otpForm!: FormGroup;
  otpGenerated = false;
  loading = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      phone: [
        '',
        [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]
      ],
      otp: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{4}$')]
      ]
    });
  }

  generateOtp(): void {
    if (this.otpForm.get('phone')?.invalid) return;

    this.loading = true;
    this.errorMsg = '';

    this.authService.generateOtp(this.otpForm.value.phone)
      .subscribe(() => {
        this.loading = false;
        this.otpGenerated = true;
        alert('OTP Generated Successfully (Use 1234)');
      });
  }

  verifyOtp(): void {
    if (this.otpForm.invalid) return;

    this.loading = true;
    this.errorMsg = '';

    const { phone, otp } = this.otpForm.value;

    this.authService.verifyOtp(phone, otp)
      .subscribe(res => {
        this.loading = false;

        if (res.success) {
          this.router.navigate(['/user-dashboard']);
        } else {
          this.errorMsg = 'Invalid OTP';
        }
      });
  }
}
