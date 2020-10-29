import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.redirectToPage();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authenticationService
      .login(this.username.value, this.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.redirectToPage();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  redirectToPage(): void {
    if (this.authenticationService.userValue) {
      if (this.authenticationService.userValue.role === 'Admin') {
        this.router.navigateByUrl('/pages/admin');
      } else if (this.authenticationService.userValue.role === 'Customer') {
        this.router.navigateByUrl('/pages/customer');
      } else if (this.authenticationService.userValue.role === 'Employee') {
        this.router.navigateByUrl('/pages/employee');
      }
    }
  }
}
