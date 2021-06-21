import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }
  forgot(forgotpassword:NgForm){
    console.log(forgotpassword.value,forgotpassword.valid)

  }

  ngOnInit(): void {
  }

}
