  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAdminPassword(adminname: string){
    return this.http.get(this.apiUrl + '/admins/adminpassword/' + adminname);
  }

  getAdminByAdminName(adminname: string){
      return this.http.get(this.apiUrl + '/admins/' + adminname);
  }
}