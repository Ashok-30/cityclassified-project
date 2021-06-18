import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-classifieds',
  templateUrl: './post-classifieds.component.html',
  styleUrls: ['./post-classifieds.component.css']
})
export class PostClassifiedsComponent implements OnInit {

  constructor() { }
  post(postclassified:NgForm){
    console.log(postclassified.value,postclassified.valid)

  }

  ngOnInit(): void {
  }

}
