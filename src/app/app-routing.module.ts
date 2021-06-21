import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AddCitydetailsComponent } from "./components/add-citydetails/add-citydetails.component";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { ContentPageComponent } from "./components/content-page/content-page.component";
import { DeleteClassifiedsComponent } from "./components/delete-classifieds/delete-classifieds.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { MyclassifiedsComponent } from "./components/myclassifieds/myclassifieds.component";
import { PostClassifiedsComponent } from "./components/post-classifieds/post-classifieds.component";
import { RegisterComponent } from "./components/register/register.component";
import { UpdateCitydetailsComponent } from "./components/update-citydetails/update-citydetails.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { ViewClassifiedsComponent } from "./components/view-classifieds/view-classifieds.component";
import { WelcomeAdminComponent } from "./components/welcome-admin/welcome-admin.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PostClassifiedsAdminComponent } from "./post-classifieds-admin/post-classifieds-admin.component";
import { UpdateClassifiedComponent } from "./update-classified/update-classified.component";

 const routes: Routes=[
     {path:'admin-login', component:AdminLoginComponent},
     {path:'',component:WelcomeComponent},
     {path:'user-login',component:UserLoginComponent},
     {path:'register',component:RegisterComponent},
     {path:'forgot-password',component:ForgotPasswordComponent},
     {path:'view-classifieds',component:ViewClassifiedsComponent},
     {path:'content-page/:username',component:ContentPageComponent},
     {path:'welcome-admin/:adminid',component:WelcomeAdminComponent},
     {path: 'post-classifieds-admin/:adminid', component:PostClassifiedsAdminComponent},
     {path:'myclassifieds/:username',component:MyclassifiedsComponent},
     {path:'add-citydetails',component:AddCitydetailsComponent},
     {path:'post-classifieds/:username',component:PostClassifiedsComponent},
     {path:'update-citydetails',component:UpdateCitydetailsComponent},
     {path:'delete-classifieds',component:DeleteClassifiedsComponent},
     {path: 'update-classified/:username/:classified', component:UpdateClassifiedComponent}
  
 ];

 @NgModule({
     imports:[RouterModule.forRoot(routes)],
     exports:[RouterModule]
 })
 export class AppRoutingModule{ }
 export const routingComponents =[AdminLoginComponent]