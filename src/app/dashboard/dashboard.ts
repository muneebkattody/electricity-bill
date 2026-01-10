import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
   goToPaybill() {
    this.router.navigate(['/guestpaybill']);
  }
}