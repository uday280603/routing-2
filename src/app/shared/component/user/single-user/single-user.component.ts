import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/Iuser';
import { UserService } from 'src/app/shared/service/user.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  userId!: string;
  getUserObj!: Iuser;

  constructor(
    private _activedRoute: ActivatedRoute,
    private _userService: UserService,
    private _matDialog: MatDialog,
    private _snackbar: SnackbarService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    this.getUserbyId();
  }

  getUserbyId() {
    this.userId = this._activedRoute.snapshot.paramMap.get('userId')!;
    this._userService.getUserById(this.userId).subscribe({
      next: (data) => {
        this.getUserObj = data;
      },
    });
  }

  onRemove() {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = `Are you sure to remove  the user with id ${this.userId}..?`;
    let _matRef = this._matDialog.open(GetConfirmComponent, config);
    _matRef.afterClosed().subscribe((Confirmation) => {
      if (Confirmation) {
        this._userService.removeUser(this.userId).subscribe({
          next: (res) => {
            this._snackbar.opensnackbar(res.msg);
            this._router.navigate(['users']);
            
            
          },
        });
      }
    });
  }
}
