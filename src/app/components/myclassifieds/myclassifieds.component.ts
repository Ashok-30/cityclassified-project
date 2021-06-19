import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassifiedsService } from 'src/app/services/classifieds.service';

@Component({
  selector: 'app-myclassifieds',
  templateUrl: './myclassifieds.component.html',
  styleUrls: ['./myclassifieds.component.css']
})
export class MyclassifiedsComponent implements OnInit {

  userClassifieds: any[] = [];
  currentUser: string = '';

  constructor(private service: ClassifiedsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
    this.service.getAllClassifiedsOfAUser(this.currentUser)
      .subscribe(response => {
        this.userClassifieds = response as any[];
      }, error => {
        console.log(error);
      })
  }


}
