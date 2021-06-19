import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  incorrectPassword: boolean = false;
  loading: boolean = false;
  adminid: number = 0;

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onSubmit(adminForm:NgForm){
    this.loading = true;
    this.service.getAdminPassword(adminForm.value.adminname)
      .subscribe(response => {
        if (adminForm.value.password === (response as string[])[0]){
          console.log("Login Success")
          this.service.getAdminByAdminName(adminForm.value.adminname)
            .subscribe(response => {
              console.log(response)
              this.adminid = (response as Admin).id
              this.router.navigateByUrl('/welcome-admin/'+ this.adminid);
            })
        }
        else {
          this.incorrectPassword = true;
          this.loading = false;
        }
      }, error => {
        alert("An error occured")
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
