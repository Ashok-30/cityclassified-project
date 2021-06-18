import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  incorrectPassword: boolean = false;
  loading: boolean = false;

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onSubmit(adminForm:NgForm){
    this.loading = true;
    this.service.getPassword(adminForm.value.adminname)
      .subscribe(response => {
        if (adminForm.value.password === (response as string[])[0]){
          console.log("Login Success")
          this.router.navigateByUrl('/welcome-admin/'+ (adminForm.value.adminname as string));
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
