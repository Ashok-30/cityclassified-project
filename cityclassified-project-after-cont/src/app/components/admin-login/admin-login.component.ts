import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
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

  constructor(private service: AdminService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(adminForm: NgForm) {
    this.loading = true;
    this.incorrectPassword = false;

    const promise = this.authService.authenticateAdmin(adminForm.value.adminname, adminForm.value.password)

    promise.then(() => {
      if (this.authService.isAdminLoggedIn()) {
        this.service.getAdminByAdminName(adminForm.value.adminname)
          .subscribe(response => {
            this.adminid = (response as Admin).id
            this.router.navigateByUrl('/welcome-admin/' + this.adminid);
          })
      }
      else {
        this.incorrectPassword = true;
        this.loading = false;
      }
    }).catch(() => {
      this.incorrectPassword = true;
      this.loading = false;
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
