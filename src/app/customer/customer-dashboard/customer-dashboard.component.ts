import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  //accounts: any[]; // Assuming this would be fetched from a service

  ngOnInit(): void {
    // Fetch accounts data here
  }
}
