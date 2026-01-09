import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './complaint.html',
  styleUrl: './complaint.css',
})
export class Complaint {

  complaintForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.complaintForm = this.fb.group({
      complaintType: ['', Validators.required],
      consumerId: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitComplaint() {
    if (this.complaintForm.valid) {
      alert('Complaint Registered Successfully');
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
