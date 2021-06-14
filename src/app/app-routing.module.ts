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

 const routes: Routes=[
     {path:'admin-login', component:AdminLoginComponent},
     {path:'',component:WelcomeComponent},
     {path:'user-login',component:UserLoginComponent},
     {path:'register',component:RegisterComponent},
     {path:'forgot-password',component:ForgotPasswordComponent},
     {path:'view-classifieds',component:ViewClassifiedsComponent},
     {path:'content-page',component:ContentPageComponent},
     {path:'welcome-admin',component:WelcomeAdminComponent},
     {path:'myclassifieds',component:MyclassifiedsComponent},
     {path:'add-citydetails',component:AddCitydetailsComponent},
     {path:'post-classifieds',component:PostClassifiedsComponent},
     {path:'update-citydetails',component:UpdateCitydetailsComponent},
     {path:'delete-classifieds',component:DeleteClassifiedsComponent}
  
 ];

 @NgModule({
     imports:[RouterModule.forRoot(routes)],
     exports:[RouterModule]
 })
 export class AppRoutingModule{ }
 export const routingComponents =[AdminLoginComponent]