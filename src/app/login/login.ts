import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  otpForm!: FormGroup;
  otpGenerated = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9][0-9]{9}$')
        ]
      ],
      otp: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{4}$')
        ]
      ]
    });
  }

  generateOtp(): void {
    if (this.otpForm.get('phone')?.valid) {
      this.otpGenerated = true;
      alert('OTP Generated Successfully');
    }
  }

  verifyOtp(): void {
    if (this.otpForm.valid) {
      // Redirect to User Dashboard
      this.router.navigate(['/UserDashboard']);
    }
  }
}