import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

 
  user = {
    name: 'Sireeshan',
    location: 'Gundlupet, Karnataka'
  };

  pendingAmount = 4213451;
  dueDate = '18th Jan 2026';

  bills = [
    { month: 'January', unit: 124, charge: 432524 },
    { month: 'January', unit: 124, charge: 432524 },
    { month: 'January', unit: 124, charge: 432524 },
    { month: 'January', unit: 124, charge: 432524 }
  ];

  constructor(private router: Router) {}

  createComplaint() {
    this.router.navigate(['/complaint']);
  }

  payNow() {
    this.router.navigate(['/payment']);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}