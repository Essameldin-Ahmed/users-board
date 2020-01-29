import { Injectable } from '@angular/core';
import { UserModel } from './shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { APIPath } from './shared/api-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersList: UserModel[] = [];
  
  selectedUser: UserModel;
  pageCount = 5;
  constructor(private http: HttpClient) { }

  getUsersList

  getUsers(page: number = 1) {
    return this.http.get<UserModel[]>
    (`${APIPath.USERS}`, { params: { page: page.toString(), _limit: this.pageCount.toString(), _start: ((page - 1) * this.pageCount).toString() } })
     
  }
  
}
