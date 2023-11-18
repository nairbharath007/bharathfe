import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdCalculatorComponent } from './customer/fd-calculator/fd-calculator.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path: 'fd-calculator', component: FdCalculatorComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
