import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  currentUser: any;
  notSame: boolean = false;
  loading: boolean = false;

  constructor(private router: ActivatedRoute, private userService: UserService, private routeTo: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      console.log(params)
      this.currentUser = params.get('userObj')
      this.currentUser = JSON.parse(this.currentUser)
    })
  }

  onSubmit(newPassword: NgForm) {
    this.loading = true
    if (newPassword.value.password == newPassword.value.confirmPassword) {
      this.notSame = false
      this.currentUser["password"] = newPassword.value.password
      this.userService.updateUser(this.currentUser)
        .subscribe(response => {
          alert("Password Updated Successfully..")
          this.routeTo.navigateByUrl('/user-login')
        })
    }
    else {
      this.loading = false
      this.notSame = true
    }
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
