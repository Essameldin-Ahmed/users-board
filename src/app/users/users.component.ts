import { Component, OnInit } from '@angular/core';
import { HeadingModel } from '../shared/models/heading.model';
import { UserModel } from '../shared/models/user.model';
import { UsersService } from '../users.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { PopupModelComponent } from '../shared/components/popup-model/popup-model.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  headingData: HeadingModel = { title: 'Users list', actionText: '<i class="fas fa-plus mr-1"></i> New User', crumbData: [{ link: '/', name: 'Home' }, { name: 'dashboard', active: true }] }

  usersList: UserModel[] = [];
  selectedUser: UserModel;
  currentPage: number = 1;
  latestUsers: boolean;
  loading: boolean
  constructor(private userService: UsersService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true
    this.userService.getUsers(this.currentPage).subscribe(
      this.processData,
      (err) => {
        this.loading = false;
        console.error(err)
      }
    );
  }

  private processData = (res) => {
    this.currentPage++;
    this.usersList = this.usersList ? [...this.usersList, ...res.users] : [...res.users];
    this.selectedUser = this.userService.selectedUser || null
    this.latestUsers = res.latest
    this.loading = false
  }

  addNewUser() {
    const dialogRef = this.dialog.open(PopupModelComponent, {
      width: '350px',
      data: { cancelBtn: 'Cancel', okBtn: 'Add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(result).subscribe(
          (res) => {
            this.usersList.unshift({ ...res });
          }
        )
      }
    });
  }

  editUser(user: UserModel) {
    const dialogRef = this.dialog.open(PopupModelComponent, {
      width: '350px',
      data: { ...user, cancelBtn: 'Cancel', okBtn: 'Save' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.editUser(result).subscribe(
          (res) => {
            let userIndex = this.usersList.findIndex((user) => user.id === result.id)
            if (userIndex > -1) {
              this.usersList[userIndex] = res
              if (this.selectedUser && this.selectedUser.id === res.id) {
                this.selectedUser = res
                this.userService.selectedUser = res
              }
            }
          }
        )
      }
    });
  }

  deleteUser(user: UserModel) {
    const dialogRef = this.dialog.open(PopupModelComponent, {
      width: '350px',
      data: { ...user, cancelBtn: 'No', okBtn: 'Yes', delete: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.deleteUser(result).subscribe(
        (res) => {
          let userIndex = this.usersList.findIndex((user) => user.id === result);
          if (userIndex > -1) {
            this.usersList.splice(userIndex, 1)
            if (this.selectedUser && this.selectedUser.id === result) {
              this.selectedUser = null;
              this.userService.selectedUser = null
            }
          }
        }
      )
    });
  }

  selectUser(user: UserModel) {
    this.selectedUser = user;
    this.userService.selectedUser = user
  }

  removeSelection() {
    this.selectedUser = null;
    this.userService.selectedUser = null;
  }

}
