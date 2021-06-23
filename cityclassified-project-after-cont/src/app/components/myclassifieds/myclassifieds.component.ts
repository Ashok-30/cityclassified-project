import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassifiedsService } from 'src/app/services/classifieds.service';

@Component({
  selector: 'app-myclassifieds',
  templateUrl: './myclassifieds.component.html',
  styleUrls: ['./myclassifieds.component.css']
})
export class MyclassifiedsComponent implements OnInit {

  userClassifieds: any[] = [];
  currentUser: string = '';
  
  constructor(private service: ClassifiedsService, private router: ActivatedRoute, private routeTo: Router) { }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
    this.service.getAllClassifiedsOfAUser(this.currentUser)
      .subscribe(response => {
        this.userClassifieds = response as any[];
      }, error => {
        console.log(error);
      })
  }

  onUpdate(classified: any){
    this.routeTo.navigate(['/update-classified/' + this.currentUser, JSON.stringify(classified)])
  }

  onDelete(classified: any){
    if(confirm("Do you really want to delete this? ")) {
      this.service.deleteClassified(classified.id)
        .subscribe(response => {
          alert("Deleted Successfully")
          this.userClassifieds = this.userClassifieds.filter(eachClassified => eachClassified.id != classified.id)
        }, error => {
          alert("Some error occured")
          console.log(error)
        })
    }
  }


}
