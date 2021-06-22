import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddcitydetailsService } from 'src/app/services/addcitydetails.service';

@Component({
  selector: 'app-add-citydetails',
  templateUrl: './add-citydetails.component.html',
  styleUrls: ['./add-citydetails.component.css']
})
export class AddCitydetailsComponent implements OnInit {
  currentAdminId: number = 0;
  admin: any = {}

  constructor(private router: ActivatedRoute, private service: AddcitydetailsService, private routeTo: Router) { }

  post(postcitydetails: NgForm) {
    console.log(postcitydetails.value)
    postcitydetails.value["admin"] = this.admin
    postcitydetails.value["postedDate"] = new Date()
    this.service.postCitydetails(postcitydetails.value)
      .subscribe(response => {
        if (response != null) {
          alert("Posted Successfully")
          this.routeTo.navigateByUrl('/welcome-admin/' + this.currentAdminId);
        }
      }, error => {
        alert("Some error occured... Try again later")
        console.log(error)
        this.routeTo.navigateByUrl('/welcome-admin/' + this.currentAdminId);
      })
  }

  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
    this.admin = { id: this.currentAdminId };
  }

}