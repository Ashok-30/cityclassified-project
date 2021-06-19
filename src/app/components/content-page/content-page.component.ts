import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  currentUser: string = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
  }

  content(contentpage:NgForm){
    console.log(contentpage.value,contentpage.valid)

  }

}
