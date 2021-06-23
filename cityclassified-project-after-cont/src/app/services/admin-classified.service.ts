import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminClassifiedService {
  
  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  postClassified(post: any){
    return this.http.post(this.apiUrl + '/adminclassifieds/adminclassified', post);
  }

  getAllClassifiedsForCity(cityId: number){
    return this.http.get(this.apiUrl + '/adminclassifieds/city/' + cityId);
  }
  deleteClassified(adminClassifiedId: number){
    return this.http.delete(this.apiUrl + '/adminclassifieds/adminclassified/' + adminClassifiedId,  {responseType: 'text'});
  }

  getAllClassifiedsByCategory(category: string){
    return this.http.get(this.apiUrl + '/adminclassifieds/category/' + category);
  }

  getClassifiedById(adminClassifiedId: string){
    return this.http.get(this.apiUrl + '/adminclassifieds/' + adminClassifiedId);
  }

}