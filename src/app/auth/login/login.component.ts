import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  error;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/users'])
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      this.error = "login seams to be invalid please fill with valid data"
      return;
    }
    this.authService.login(this.f.userName.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        this.error = null
        this.handleNavigation();
      },
        (error: HttpErrorResponse) => {
          this.f.password.reset();
          this.error = error.error.message
        }
      );
  }

  handleNavigation() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || null;
    if (this.returnUrl) {
      this.router.navigateByUrl(this.returnUrl);
      return
    }
    this.router.navigate(['/users'])
  }
}
