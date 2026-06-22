import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/Iuser';
import { UserService } from 'src/app/shared/service/user.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  getAllUsers!: Iuser[];

  constructor(private _userrService: UserService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._userrService.fetchAllUsers().subscribe({
      next: (data) => {
        this.getAllUsers = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
