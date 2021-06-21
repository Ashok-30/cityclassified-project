import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getUserNames(){
    return this.http.get(this.apiUrl + '/users/usernames');
  }

  addUser(user:any){
    return this.http.post(this.apiUrl + '/users/user', user);
  }

}
