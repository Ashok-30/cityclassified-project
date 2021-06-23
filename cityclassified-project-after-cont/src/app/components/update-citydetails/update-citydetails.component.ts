import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddcitydetailsService } from 'src/app/services/addcitydetails.service';

@Component({
  selector: 'app-update-citydetails',
  templateUrl: './update-citydetails.component.html',
  styleUrls: ['./update-citydetails.component.css']
})
export class UpdateCitydetailsComponent implements OnInit {


  currentAdminId: number = 0;
  detail: any = { infoId: null, heading: null, description: null, address: null, postedDate: null };

  constructor(private service: AddcitydetailsService, private router: ActivatedRoute, private routeTo: Router) { }

  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.username;
  }
  
  onUpdate() {
    this.service.updateCityDetails(this.detail)
      .subscribe(response => {
        alert("Updated Successfully")
        this.routeTo.navigateByUrl('/welcome-admin/' + this.currentAdminId);
      }, error => {
        alert("Some error occured")
        console.log(error)
      })
  }
}
