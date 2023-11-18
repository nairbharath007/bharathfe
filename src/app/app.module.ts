import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './customer/sidebar/sidebar.component';
import { HeaderComponent } from './customer/header/header.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { FdCalculatorComponent } from './customer/fd-calculator/fd-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CustomerDashboardComponent,
    FdCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
