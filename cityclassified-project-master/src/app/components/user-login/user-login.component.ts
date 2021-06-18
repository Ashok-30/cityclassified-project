import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  incorrectPassword: boolean = false;
  loading: boolean = false;

  constructor(private service: UserService, private router: Router) { }
 
  ngOnInit(): void {
  }

  onSubmit(userForm:NgForm){
    this.loading = true;
    this.service.getPassword(userForm.value.username)
      .subscribe(response => {
        if (userForm.value.password === (response as string[])[0]){
          console.log("Login Success")
          this.router.navigateByUrl('/content-page/'+ (userForm.value.username as string));
        }
        else {
          this.incorrectPassword = true;
          this.loading = false;
        }
      }, error => {
        console.log(error)
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
