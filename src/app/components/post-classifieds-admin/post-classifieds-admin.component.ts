  
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminClassifiedService } from 'src/app/services/admin-classified.service';

@Component({
  selector: 'app-post-classifieds-admin',
  templateUrl: './post-classifieds-admin.component.html',
  styleUrls: ['./post-classifieds-admin.component.css']
})
export class PostClassifiedsAdminComponent implements OnInit {

  currentAdminId: number = 0;
  admin: any = {}

  constructor(private router: ActivatedRoute, private service: AdminClassifiedService, private routeTo: Router) { }

  post(postclassified:NgForm){
    console.log(postclassified.value)
    postclassified.value["admin"] = this.admin
    postclassified.value["postedDate"] = new Date()
    this.service.postClassified(postclassified.value)
    .subscribe(response => {
      if (response != null){
        alert("Posted Successfully")
        this.routeTo.navigateByUrl('/welcome-admin/'+ this.currentAdminId);
      }
    }, error => {
      alert("Some error occured... Try again later")
      console.log(error)
      this.routeTo.navigateByUrl('/welcome-admin/'+ this.currentAdminId);
    })
  }

  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
    this.admin = {id: this.currentAdminId};
  }

}