import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-citydetails',
  templateUrl: './add-citydetails.component.html',
  styleUrls: ['./add-citydetails.component.css']
})
export class AddCitydetailsComponent implements OnInit {

  constructor() { }
  add(citydetails:NgForm){
    console.log(citydetails.value,citydetails.valid)

  }

  ngOnInit(): void {
  }

}
