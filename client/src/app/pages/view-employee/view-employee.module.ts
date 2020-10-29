import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEmployeeRoutingModule } from './view-employee-routing.module';
import { TimecardComponent } from './timecard/timecard.component';


@NgModule({
  declarations: [TimecardComponent],
  imports: [
    CommonModule,
    ViewEmployeeRoutingModule
  ]
})
export class ViewEmployeeModule { }
