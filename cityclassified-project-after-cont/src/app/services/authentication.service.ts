import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userService: UserService, private adminService: AdminService) { }

  authenticate(username: string, password: string) {
    this.userService.getPassword(username)
      .subscribe(response => {
        if (password === (response as string[])[0]) {
          sessionStorage.setItem('username', username)
          return true;
        }
        else {
          return false;
        }
      }, error => {
        console.log(error)
      })
  }

  authenticateAdmin(adminname: string, password: string) {
    this.adminService.getAdminPassword(adminname)
      .subscribe(response => {
        if (password === (response as string[])[0]){
          sessionStorage.setItem('adminname', adminname)
          return true
        }
        else {
          return false
        }
      }, error => {
        alert("An error occured")
        console.log(error)
      })
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('adminname')
    console.log(!(admin === null))
    return !(admin === null)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  logOutAdmin() {
    sessionStorage.removeItem('adminname')
  }

}