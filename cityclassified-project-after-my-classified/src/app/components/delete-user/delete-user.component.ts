import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  currentAdminId: number = 0;
  
  user: any = {userName:null};

  constructor(private service: UserService, private router: ActivatedRoute, private routeTo: Router) { }


  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
     }

     onDelete(deleteForm:NgForm){
      if(confirm("Do you really want to delete this? ")) {
        this.service.deleteUser(deleteForm.value.userName)
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
  