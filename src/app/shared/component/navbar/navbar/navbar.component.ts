import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _authServic: AuthService,
    private _snackbar: SnackbarService,
    private _router : Router
  ) {}

  ngOnInit(): void {}

  onLogOut() {
    this._authServic.logout().subscribe({
      next: (data) => {
        this._snackbar.opensnackbar(data.msg);
        this._router.navigate([''])
      },
      error: (err) => {
        this._snackbar.opensnackbar(err.error);
      },
    });
  }
}
