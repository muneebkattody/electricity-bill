import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Dashboardservice } from '../dashboardservice';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

  user: any = {};
  pendingAmount = 0;
  dueDate = '';
  bills: any[] = [];
  loading = true;

  constructor(
    private router: Router,
    private dashboardService: Dashboardservice
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.dashboardService.getUserDetails().subscribe(res => {
      this.user = res;
    });

    this.dashboardService.getPendingPayment().subscribe(res => {
      this.pendingAmount = res.amount;
      this.dueDate = res.dueDate;
    });

    this.dashboardService.getBills().subscribe(res => {
      this.bills = res;
      this.loading = false;
    });
  }

  createComplaint() {
    this.router.navigate(['/complaintstatus']);
  }

  payNow() {
    this.router.navigate(['/payment']);
  }

  signOut() {
    this.router.navigate(['/login']);
  }
}