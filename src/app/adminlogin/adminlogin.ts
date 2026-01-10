import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.css',
})
export class Adminlogin {

  loginForm: FormGroup;
  otpForm!: FormGroup;
  showOtp = false;
  generatedOtp = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  generateOtp() {
    if (this.loginForm.valid) {
      this.generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
      console.log('Generated OTP:', this.generatedOtp);

      this.otpForm = this.fb.group({
        otp: ['', [
          Validators.required,
          Validators.pattern(/^[0-9]{4}$/)
        ]]
      });

      this.showOtp = true;
    }
  }

  verifyOtp() {
    if (this.otpForm.valid) {
      if (this.otpForm.value.otp === this.generatedOtp) {
        alert('Login Successful');
        this.router.navigate(['/user-dashboard']);
      } else {
        alert('Invalid OTP');
      }
    }
  }
}