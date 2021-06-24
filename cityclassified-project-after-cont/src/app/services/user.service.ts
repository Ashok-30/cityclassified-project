import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getPassword(username: string) {
    return this.http.get(this.apiUrl + '/users/password/' + username);
  }

  getUser(userName: string) {
    return this.http.get(this.apiUrl + '/users/' + userName)
  }

  updateUser(user: any) {
    return this.http.put(this.apiUrl + '/users/user', user)
  }

  deleteUser(userName: string) {
    return this.http.delete(this.apiUrl + '/users/' + userName, { responseType: 'text' });
  }

}
