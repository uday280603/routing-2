import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { SnackbarService } from '../../service/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isAllReadyHaveAccount: boolean = false;
  signUpForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _snackbar: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.onCreateLoginForm();
    this.onCreateSign();
  }

  onCreateSign() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    });
  }

  onCreateLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      let userDetails = { ...this.loginForm.value };
      this._authService.logIn(userDetails).subscribe({
        next: (data) => {
          console.log(data);
          this._authService.saveToken(data.token);
          this._authService.saveUser(data.userRole);

          this._router.navigate(['home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onSignIn() {
    if (this.signUpForm.valid) {
      let userDeatails = { ...this.signUpForm.value };
      this._authService.signin(userDeatails).subscribe({
        next: (data) => {
          this.isAllReadyHaveAccount = true;
        },
        error: (err) => {
          this._snackbar.opensnackbar(err.error);
        },
      });
    }
    else{
      this.signUpForm.markAllAsTouched();
    }
  }
}
