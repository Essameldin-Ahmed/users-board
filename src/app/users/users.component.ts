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
  scrollCallback;
  constructor(private userService: UsersService, public dialog: MatDialog) {
    this.scrollCallback = this.getUsers.bind(this);
   }

  ngOnInit() {
  }

  getUsers() {
    return this.userService.getUsers(this.currentPage).pipe(map(this.processData));
  }

  private processData = (users) => {
    this.currentPage++;
    this.usersList = this.usersList ? [...this.usersList, ...users] : [...users];
    this.selectedUser = this.userService.selectedUser || null

  }

  addNewUser() {
    const dialogRef = this.dialog.open(PopupModelComponent, {
      width: '350px',
      data: {cancelBtn: 'Cancel', okBtn: 'Add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  editUser(user: UserModel) {
    const dialogRef = this.dialog.open(PopupModelComponent, {
      width: '350px',
      data: {...user, cancelBtn: 'Cancel', okBtn: 'Save'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  deleteUser(user: UserModel) {
    const dialogRef = this.dialog.open(PopupModelComponent, {
      width: '350px',
      data: {...user, cancelBtn: 'No', okBtn: 'Yes', delete: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
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
