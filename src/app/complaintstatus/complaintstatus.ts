import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaintservice } from '../complaintservice';
import { Statusservice } from '../statusservice';

@Component({
  selector: 'app-complaintstatus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complaintstatus.html',
  styleUrl: './complaintstatus.css',
})
export class Complaintstatus implements OnInit{

  activeComplaint: any;
  complaints: any[] = [];

  constructor(
    private complaintService: Statusservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.complaintService.getActiveComplaint()
      .subscribe(res => this.activeComplaint = res);

    this.complaintService.getAllComplaints()
      .subscribe(res => this.complaints = res);
  }

  createComplaint() {
    this.router.navigate(['/complaint']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  viewComplaint(id: number) {
    alert('Viewing complaint ID: ' + id);
  }
}
