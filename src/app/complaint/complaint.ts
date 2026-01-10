import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaintservice } from '../complaintservice';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './complaint.html',
  styleUrl: './complaint.css',
})
export class Complaint {

  complaintForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private complaintService: Complaintservice
  ) {
    this.complaintForm = this.fb.group({
      complaintType: ['', Validators.required],
      consumerId: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{6,12}$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  submitComplaint() {
    if (this.complaintForm.invalid) {
      return;
    }

    this.loading = true;

    this.complaintService.submitComplaint(this.complaintForm.value)
      .subscribe({
        next: (res) => {
          alert(res.message);
          this.loading = false;
          this.router.navigate(['/user-dashboard']);
        },
        error: () => {
          alert('Something went wrong');
          this.loading = false;
        }
      });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
