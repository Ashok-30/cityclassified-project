import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassifiedsService } from 'src/app/services/classifieds.service';
import { AddcitydetailsService } from 'src/app/services/addcitydetails.service';
import { AdminClassifiedService } from 'src/app/services/admin-classified.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  currentUser: string = '';
  switch: boolean = true;
  cityInfos: any[] = [];
  cityClassifieds: any[] = [];
  cityInfoError: boolean = false;
  cityAdminClassifieds: any[] = [];
  cityClassifiedError: boolean = false;

  constructor(private service: ClassifiedsService, private router: ActivatedRoute, private routeTo: Router, private cityInfoService: AddcitydetailsService, private adminClassifiedService: AdminClassifiedService) { }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
    this.cityInfoService.getCityInfos(1)
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        console.log(error)
      })
  }

  switchComponent(){
    this.switch = !this.switch
  }

  content(contentpage:NgForm){
    console.log(contentpage.value,contentpage.valid)
  }

  getCityInfos(event: any){
    var defaultCheck = document?.getElementsByName("choose-type");
    defaultCheck?.forEach(element => {
      (element as HTMLInputElement).checked = false;
    });
    this.cityInfoService.getCityInfos(event.target.value)
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        console.log(error)
      })
  }

  getAllCityInfos(cityId: any){
    this.cityInfoService.getCityInfos(parseInt(cityId))
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        console.log(error)
      })
  }

  getAllCityInfosForType(event: any, cityId:any){
    this.cityInfoService.getCityInfosForType(parseInt(cityId), event.target.value)
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        console.log(error)
      })
  }

  getOverallClassifiedsForCity(event: any){
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
