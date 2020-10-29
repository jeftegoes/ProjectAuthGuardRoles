import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAdminRoutingModule } from './view-admin-routing.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';


@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ViewAdminRoutingModule
  ]
})
export class ViewAdminModule { }
