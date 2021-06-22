import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddcitydetailsService } from 'src/app/services/addcitydetails.service'; 

@Component({
  selector: 'app-delete-city-details',
  templateUrl: './delete-city-details.component.html',
  styleUrls: ['./delete-city-details.component.css']
})
export class DeleteCityDetailsComponent implements OnInit {

 
  currentAdminId: number = 0;
  
  info: any = {infoId:null};

  constructor(private service: AddcitydetailsService, private router: ActivatedRoute, private routeTo: Router) { }

  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
     }


  onDelete(deleteForm:NgForm){
    if(confirm("Do you really want to delete this? ")) {
      this.service.deleteCityDetails(deleteForm.value.infoId)
        .subscribe(response => {
          alert("Deleted Successfully")
          this.routeTo.navigateByUrl('/welcome-admin/'+ this.currentAdminId);
          
        }, error => {
          alert("Some error occured")
          console.log(error)
        })
    }
  }
}
