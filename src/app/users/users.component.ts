import { Component, OnInit } from '@angular/core';
import { HeadingModel } from '../shared/models/heading.model';
import { UserModel } from '../shared/models/user.model';
import { UsersService } from '../users.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  headingData: HeadingModel = { title: 'Users list', actionText: '<i class="fas fa-plus mr-1"></i> New User', crumbData: [{ link: '/', name: 'Home' }, { name: 'dashboard', active: true }] }
  
  usersList: UserModel[] = [];
  currentPage: number = 1;
  scrollCallback;
  constructor(private userService: UsersService) {
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
  }

  handleHeadingAction() {
    console.log('clicked')
  }
}
