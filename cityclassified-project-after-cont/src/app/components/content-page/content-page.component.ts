import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassifiedsService } from 'src/app/services/classifieds.service';
import { AddcitydetailsService } from 'src/app/services/addcitydetails.service';
import { AdminClassifiedService } from 'src/app/services/admin-classified.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  noResults: boolean = false;

  constructor(private service: ClassifiedsService, private router: ActivatedRoute, private routeTo: Router, private cityInfoService: AddcitydetailsService, private adminClassifiedService: AdminClassifiedService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser = this.router.snapshot.params.username;
    this.cityInfoService.getCityInfos(1)
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        console.log(error)
      })
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

  switchComponent() {
    this.switch = !this.switch
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
  }

  content(contentpage: NgForm) {
    console.log(contentpage.value, contentpage.valid)
  }

  getCityInfos(event: any) {
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;

    var defaultCheck = document?.getElementsByName("choose-type");
    defaultCheck?.forEach(element => {
      (element as HTMLInputElement).checked = false;
    });
    this.cityInfoService.getCityInfos(event.target.value)
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true
        this.cityInfos = []
        console.log(error)
      })
  }

  getAllCityInfos(cityId: any) {
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
    this.cityInfoService.getCityInfos(parseInt(cityId))
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        this.cityInfos = []
        console.log(error)
      })
  }

  getAllCityInfosForType(event: any, cityId: any) {
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
    this.cityInfoService.getCityInfosForType(parseInt(cityId), event.target.value)
      .subscribe(response => {
        this.cityInfos = (response as string[])
      }, error => {
        this.cityInfoError = true;
        this.cityInfos = []
        console.log(error)
      })
  }

  getOverallClassifiedsForCity(event: any) {
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
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

  onSearchByCategory(category: any){
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
    this.adminClassifiedService.getAllClassifiedsByCategory(category.value)
      .subscribe(response => {
        if ((response as string[]).length > 0){
          this.noResults = false
          this.cityAdminClassifieds = response as string[]
        }
        else{
          this.cityAdminClassifieds = []
        }
      }, error => {
        this.cityClassifiedError = true
        console.log(error)
      })

      this.service.getAllClassifiedsByCategory(category.value)
      .subscribe(response => {
        if ((response as string[]).length > 0){
          this.noResults = false
          this.cityClassifieds = response as string[]
        }
        else{
          this.noResults = true
          this.cityClassifieds = []
        }
      }, error => {
        this.cityClassifiedError = true
        console.log(error)
      })
  }

  onSearchByAdminClassifiedId(adminclassifiedid: any){
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
    this.adminClassifiedService.getClassifiedById(adminclassifiedid.value)
      .subscribe(response => {
        if(response != null){
          this.cityAdminClassifieds = []
          this.cityAdminClassifieds.push(response)
          this.cityClassifieds = []
        }
        else {
          this.noResults = true
          this.cityAdminClassifieds = []
          this.cityClassifieds = []
        }
      }, error => {
        this.cityClassifiedError = true
        console.log(error)
      })
  }

  onSearchByClassifiedId(classifiedid: any){
    this.cityClassifiedError = false;
    this.noResults = false;
    this.cityInfoError = false;
    this.service.getClassifiedById(classifiedid.value)
      .subscribe(response => {
        if (response != null){
          this.cityClassifieds = []
          this.cityAdminClassifieds = []
          this.cityClassifieds.push(response)
        } else {
          this.noResults = true
          this.cityClassifieds = []
          this.cityAdminClassifieds = []
        }
      }, error => {
        this.cityClassifiedError = true
        console.log(error)
      })
  }

  onLogout(){
    this.authService.logOut();
    this.routeTo.navigateByUrl('');
  }

}
