import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor() { }
  welcomeadminForm(welcomeadminForm:NgForm){
    console.log(welcomeadminForm.value,welcomeadminForm.valid)

  }

  ngOnInit(): void {
  }

}
