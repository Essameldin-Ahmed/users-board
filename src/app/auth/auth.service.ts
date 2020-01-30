import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { APIPath } from '../shared/api-config';
import { map, catchError } from 'rxjs/operators';
import { AdminModel } from '../shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<AdminModel>;
  public currentUser: Observable<AdminModel>;
  error;
  userData;

  constructor(private http: HttpClient) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    let user: AdminModel;
    if (this.userData) {
      user = this.prepareUser(this.userData)
    }
    this.currentUserSubject = new BehaviorSubject<AdminModel>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AdminModel {
    return this.currentUserSubject.value;
  }

  login(userName: string, password: string) {
    return this.http.post<{ user: {}, jwt: string }>(`${APIPath.AUTH}/login`, { userName, password })
      .pipe(
        // login successful if there's a jwt token in the response
        map(res => this.loginSuccess(res)),
        catchError(err => {
          throw (err);
        })
      );
  }


  loginSuccess(res) {
    if (res && res.jwt) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('userData', JSON.stringify(res));
      let user: AdminModel = this.prepareUser(res.userData)
      this.currentUserSubject.next(user);
      return user;
    }
    return null;

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userData');
    this.userData = null
    this.currentUserSubject.next(null);
  }

  private prepareUser(userData) {
    let user: AdminModel = null;
    if (userData) {
      user = {
        id: userData.id,
        userName: userData.userName
      }
    }
    return user;
  }

}
