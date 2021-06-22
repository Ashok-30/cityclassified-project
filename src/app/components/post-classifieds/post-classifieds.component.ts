import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassifiedsService } from 'src/app/services/classifieds.service';

@Component({
  selector: 'app-post-classifieds',
  templateUrl: './post-classifieds.component.html',
  styleUrls: ['./post-classifieds.component.css']
})
export class PostClassifiedsComponent implements OnInit {

  currentUser: string = '';
  user: any = {}

  constructor(private router: ActivatedRoute, private service: ClassifiedsService, private routeTo: Router) { }

  post(postclassified:NgForm){
    console.log(postclassified.value)
    postclassified.value["user"] = this.user
    postclassified.value["postedDate"] = new Date()
    this.service.postClassified(postclassified.value)
    .subscribe(response => {
      if (response != null){
        alert("Posted Successfully")
        this.routeTo.navigateByUrl('/content-page/'+ this.currentUser);
      }
    }, error => {
      alert("Some error occured... Try again later")
      console.log(error)
      this.routeTo.navigateByUrl('/content-page/'+ this.currentUser);
    })
  }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
    this.user = {userName: this.currentUser};
  }

}
