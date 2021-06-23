import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminClassifiedService } from 'src/app/services/admin-classified.service';
import { ClassifiedsService } from 'src/app/services/classifieds.service';

@Component({
  selector: 'app-view-classifieds',
  templateUrl: './view-classifieds.component.html',
  styleUrls: ['./view-classifieds.component.css']
})
export class ViewClassifiedsComponent implements OnInit {

  cityClassifiedError: boolean = false;
  noResults = false;
  cityAdminClassifieds: any[] = [];
  cityClassifieds: any[] = [];

  constructor(private adminClassifiedService: AdminClassifiedService, private service: ClassifiedsService) { }

  ngOnInit(): void {
    this.cityClassifiedError = false;
    this.noResults = false;
    this.adminClassifiedService.getAllClassifiedsForCity(1)
      .subscribe(response => {
        this.cityAdminClassifieds = (response as string[])
      }, error => {
        this.cityClassifiedError = true;
        console.log(error)
      });
    this.service.getAllClassifiedsForCity(1)
      .subscribe(response => {
        this.cityClassifieds = (response as string[])
      }, error => {
        this.cityClassifiedError = true;
        console.log(error)
      })
  }

  getOverallClassifiedsForCity(event: any) {
    this.cityClassifiedError = false;
    this.noResults = false;
    this.adminClassifiedService.getAllClassifiedsForCity(event.target.value)
      .subscribe(response => {
        this.cityAdminClassifieds = (response as string[])
      }, error => {
        this.cityClassifiedError = true;
        console.log(error)
      });
    this.service.getAllClassifiedsForCity(event.target.value)
      .subscribe(response => {
        this.cityClassifieds = (response as string[])
      }, error => {
        this.cityClassifiedError = true;
        console.log(error)
      })
  }

}
