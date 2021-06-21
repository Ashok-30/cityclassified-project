import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  currentAdminId: number = 0;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
  }

  welcomeadminForm(welcomeForm: NgForm){

  }
}
