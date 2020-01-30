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
    return this.http.get<{users: UserModel[], latest: boolean}>(`${APIPath.USERS}`, { params: { limit: this.pageCount.toString(), start: ((page - 1) * this.pageCount).toString() } })
  }

  addUser(user: UserModel) {
    return this.http.post<UserModel>(`${APIPath.USERS}`, user)
  }

  editUser(user: UserModel) {
    return this.http.put<UserModel>(`${APIPath.USERS}`, user)
  }

  deleteUser(userId: string) {
    return this.http.delete(`${APIPath.USERS}/${userId}`)
  }
}
