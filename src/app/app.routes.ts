import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { Payment } from './payment/payment';
import { Complaint } from './complaint/complaint';
import { Adminlogin } from './adminlogin/adminlogin';
import { Paymentsuccess } from './paymentsuccess/paymentsuccess';
import { Complaintstatus } from './complaintstatus/complaintstatus';
import { Guestbillservice } from './guestbillservice';
import { Guestpaybill } from './guestpaybill/guestpaybill';

export const routes: Routes = [
    { path: '', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'user-dashboard', component: UserDashboard }, // After OTP
  { path: 'payment', component: Payment },
  { path: 'complaint', component: Complaint },
  { path: 'adminlogin', component: Adminlogin },
  { path: 'paymentsuccess', component: Paymentsuccess },
  { path: 'complaintstatus', component: Complaintstatus },
  { path: 'guestpaybill', component: Guestpaybill },

];
