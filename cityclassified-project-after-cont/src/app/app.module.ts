import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminService } from './admin.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ViewClassifiedsComponent } from './components/view-classifieds/view-classifieds.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { WelcomeAdminComponent } from './components/welcome-admin/welcome-admin.component';
import { MyclassifiedsComponent } from './components/myclassifieds/myclassifieds.component';
import { AddCitydetailsComponent } from './components/add-citydetails/add-citydetails.component';
import { PostClassifiedsComponent } from './components/post-classifieds/post-classifieds.component';
import { UpdateCitydetailsComponent } from './components/update-citydetails/update-citydetails.component';
import { DeleteClassifiedsComponent } from './components/delete-classifieds/delete-classifieds.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostClassifiedsAdminComponent } from './components/post-classifieds-admin/post-classifieds-admin.component';
import { UpdateClassifiedComponent } from './components/update-classified/update-classified.component';
import { DeleteAdminClassifiedComponent } from './components/delete-admin-classified/delete-admin-classified.component';
import { DeleteCityDetailsComponent } from './components/delete-city-details/delete-city-details.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    routingComponents,
    UserLoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ViewClassifiedsComponent,
    ContentPageComponent,
    WelcomeAdminComponent,
    MyclassifiedsComponent,
    AddCitydetailsComponent,
    PostClassifiedsComponent,
    UpdateCitydetailsComponent,
    DeleteClassifiedsComponent,
    PostClassifiedsAdminComponent,
    UpdateClassifiedComponent,
    DeleteAdminClassifiedComponent,
    DeleteCityDetailsComponent,
    DeleteUserComponent,
    NewPasswordComponent


  ],

  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
