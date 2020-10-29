import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCustomerRoutingModule } from './view-customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ViewCustomerRoutingModule
  ]
})
export class ViewCustomerModule { }
