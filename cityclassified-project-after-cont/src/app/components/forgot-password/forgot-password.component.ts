import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  userObj: any;
  loading: boolean = false;
  invalidCredentials: boolean = false;
  userNotRegistered: boolean = false;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  forgot(forgotpassword: NgForm) {
    this.loading = true
    this.invalidCredentials = false
    this.service.getUser(forgotpassword.value.userName)
      .subscribe(response => {
        if (response != null) {
          this.loading = false
          this.invalidCredentials = false
          this.userObj = response
          let givenDob = new Date(forgotpassword.value.dateOfBirth)
          let actualDob = new Date(this.userObj.dateOfBirth)
          if (forgotpassword.value.phoneNumber == this.userObj.phoneNumber && givenDob.toDateString() == actualDob.toDateString()) {
            this.router.navigate(['/new-password/', JSON.stringify(this.userObj)])
          }
          else {
            this.loading = false
            this.invalidCredentials = true
            this.userNotRegistered = false
          }
        }
        else {
          this.loading = false
          this.invalidCredentials = false
          this.userNotRegistered = true
        }
      }, error => {
        alert('Some error occurred')
        console.log(error)
      })
  }

}
