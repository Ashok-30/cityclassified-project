import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-classifieds',
  templateUrl: './delete-classifieds.component.html',
  styleUrls: ['./delete-classifieds.component.css']
})
export class DeleteClassifiedsComponent implements OnInit {

  constructor() { }
  user(deleteForm:NgForm){
    console.log(deleteForm.value,deleteForm.valid)

  }

  ngOnInit(): void {
  }

}
