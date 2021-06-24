import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userService: UserService, private adminService: AdminService) { }

  authenticate(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.userService.getPassword(username)
        .subscribe(response => {
          if (password === (response as string[])[0]) {
            sessionStorage.setItem('username', username)
            resolve(true)
          }
          else {
            reject(false)
          }
        }, error => {
          console.log(error)
        })
    })
  }

  authenticateAdmin(adminname: string, password: string) {
    return new Promise((resolve, reject) => {
      this.adminService.getAdminPassword(adminname)
      .subscribe(response => {
        if (password === (response as string[])[0]) {
          sessionStorage.setItem('adminname', adminname)
          resolve(true)
        }
        else {
          reject(false)
        }
      }, error => {
        alert("An error occured")
        console.log(error)
      })
    })
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('adminname')
    console.log(!(admin === null))
    return !(admin === null)
  }

  isUserLoggedIn(username: string) {
    let user = sessionStorage.getItem('username')
    return (user === username)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  logOutAdmin() {
    sessionStorage.removeItem('adminname')
  }

}