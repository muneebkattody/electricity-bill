import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { Payment } from './payment/payment';
import { Complaint } from './complaint/complaint';

export const routes: Routes = [
    { path: '', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'user-dashboard', component: UserDashboard }, // After OTP
  { path: 'payment', component: Payment },
  { path: 'complaint', component: Complaint }
];
