import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminClassifiedService } from 'src/app/services/admin-classified.service';

@Component({
  selector: 'app-delete-admin-classified',
  templateUrl: './delete-admin-classified.component.html',
  styleUrls: ['./delete-admin-classified.component.css']
})
export class DeleteAdminClassifiedComponent implements OnInit {
  
  currentAdminId: number = 0;
  
  adminClassified: any = {adminClassifiedId:null};


  constructor(private service: AdminClassifiedService, private router: ActivatedRoute, private routeTo: Router) { }
  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
     }
  onDelete(deleteForm:NgForm){
    if(confirm("Do you really want to delete this? ")) {
      this.service.deleteClassified(deleteForm.value.adminClassifiedId)
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
