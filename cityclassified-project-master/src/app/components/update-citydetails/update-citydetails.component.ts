import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-citydetails',
  templateUrl: './update-citydetails.component.html',
  styleUrls: ['./update-citydetails.component.css']
})
export class UpdateCitydetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  updateForm(update:NgForm){
    console.log(update.value,update.valid)

  }
}
