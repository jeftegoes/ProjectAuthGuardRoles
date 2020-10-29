import { Role } from './../_models/role';
import { AuthGuard } from './../_helpers/auth.guard';
import { ViewCustomerModule } from './view-customer/view-customer.module';
import { ViewAdminModule } from './view-admin/view-admin.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    loadChildren: () =>
      import('./view-admin/view-admin.module').then((m) => m.ViewAdminModule),
  },
  {
    path: 'customer',
    canActivate: [AuthGuard],
    data: { roles: [Role.Customer] },
    loadChildren: () =>
      import('./view-customer/view-customer.module').then(
        (m) => m.ViewCustomerModule
      ),
  },
  {
    path: 'employee',
    canActivate: [AuthGuard],
    data: { roles: [Role.Employee] },
    loadChildren: () =>
      import('./view-employee/view-employee.module').then(
        (m) => m.ViewEmployeeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
