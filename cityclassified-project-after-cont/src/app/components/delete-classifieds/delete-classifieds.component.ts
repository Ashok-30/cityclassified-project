import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassifiedsService } from 'src/app/services/classifieds.service';
@Component({
  selector: 'app-delete-classifieds',
  templateUrl: './delete-classifieds.component.html',
  styleUrls: ['./delete-classifieds.component.css']
})
export class DeleteClassifiedsComponent implements OnInit {

 
  currentAdminId: number = 0;
  
  classified: any = {classifiedId:null};

  constructor(private service: ClassifiedsService, private router: ActivatedRoute, private routeTo: Router) { }
  
  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
     }
  onDelete(deleteForm:NgForm){
    if(confirm("Do you really want to delete this? ")) {
      this.service.deleteClassified(deleteForm.value.classifiedId)
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
