import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-classifieds',
  templateUrl: './view-classifieds.component.html',
  styleUrls: ['./view-classifieds.component.css']
})
export class ViewClassifiedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewForm(viewForm:NgForm){
    console.log(viewForm.value,viewForm.valid)

  }

}
