import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassifiedsService } from '../../services/classifieds.service';

@Component({
  selector: 'app-update-classified',
  templateUrl: './update-classified.component.html',
  styleUrls: ['./update-classified.component.css']
})
export class UpdateClassifiedComponent implements OnInit {

  currentUser:string = '';
  classified: any = {id: null, category: null, heading: null, description: null, price: null, contactNumber: null, contactMail: null, postedDate: null};

  constructor(private service: ClassifiedsService, private router: ActivatedRoute, private routeTo: Router) { }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
    this.router.paramMap.subscribe(params => {
      this.classified = params.get('classified')
      this.classified = JSON.parse(this.classified)
      this.classified.postedDate = new Date()
      //console.log(this.classified)
    })
  }

  onUpdate(){
    this.service.updateClassified(this.classified)
      .subscribe(response => {
        alert("Updated Successfully")
        this.routeTo.navigateByUrl('/myclassifieds/' + this.currentUser);
      }, error => {
        alert("Some error occured")
        console.log(error)
      })
  }

}
