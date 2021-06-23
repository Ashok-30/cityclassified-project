import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassifiedsService } from 'src/app/services/classifieds.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  currentAdminId: number = 0;
  viewControls: boolean = true;
  classifieds: any[] = [];
  noResults: boolean = false;
  errorMsg: boolean = false;

  constructor(private router: ActivatedRoute, private service: ClassifiedsService, private authService: AuthenticationService, private routeTo: Router) { }

  ngOnInit(): void {
    this.currentAdminId = this.router.snapshot.params.adminid;
  }

  viewControlsToggle(){
    this.viewControls = !this.viewControls;
    this.errorMsg = false
  }

  onSearchByClassifiedId(classifiedid: any){
    this.viewControls = false
    this.service.getClassifiedById(classifiedid.value)
      .subscribe(response => {
        if (response != null){
          this.noResults = false
          this.errorMsg = false
          this.classifieds = []
          this.classifieds.push(response)
        }
        else {
          this.noResults = true
          this.classifieds = []
        }
      }, error => {
        this.errorMsg = true
        console.log(error)
      })
  }

  onSearchByCategory(category: any){
    this.viewControls = false
    this.service.getAllClassifiedsByCategory(category.value)
      .subscribe(response => {
        if ((response as string[]).length > 0){
          this.noResults = false
          this.errorMsg = false
          this.classifieds = response as string[]
        }
        else{
          this.noResults = true
          this.errorMsg = false
          this.classifieds = []
        }
      }, error => {
        this.errorMsg = true
        this.noResults = false
        this.classifieds = []
        console.log(error)
      })
  }

  onLogout(){
    this.authService.logOutAdmin();
    this.routeTo.navigateByUrl('');
  }
  
}
