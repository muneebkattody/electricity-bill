import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Guestbillservice } from '../guestbillservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guestpaybill',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './guestpaybill.html',
  styleUrl: './guestpaybill.css',
})
export class Guestpaybill {

  form!: FormGroup;
  bill: any;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private billService: Guestbillservice,
    private router: Router
  ) {
    this.form = this.fb.group({
      consumerId: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  fetchBill() {
    this.loading = true;
    this.error = '';
    this.bill = null;

    this.billService.getBillByConsumerId(this.form.value.consumerId)
      .subscribe({
        next: (res) => {
          this.bill = res;
          this.loading = false;
        },
        error: (err) => {
          this.error = err;
          this.loading = false;
        }
      });
  }

  payBill() {
    this.router.navigate(['/payment'], {
      state: { bill: this.bill }
    });
  }
}