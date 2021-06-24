import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  incorrectPassword: boolean = false;
  loading: boolean = false;

  constructor(private service: UserService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    this.loading = true;
    this.incorrectPassword = false;
    const promise = this.authService.authenticate(userForm.value.username, userForm.value.password)

    promise.then(() => {
      if (this.authService.isUserLoggedIn(userForm.value.username)) {
        this.loading = false
        this.router.navigateByUrl('/content-page/' + userForm.value.username)
      }
      else {
        this.incorrectPassword = true
        this.loading = false
      }
    }).catch(() => {
      this.incorrectPassword = true
      this.loading = false
    })
  }

  toggle() {
    let x: any = document.getElementById("password");
    if (x!.type === "password") {
      x!.type = "text";
      document!.getElementById('eye')!.style.color = "red";
    } else {
      x!.type = "password";
      document!.getElementById('eye')!.style.color = "black";
    }
  }

}
