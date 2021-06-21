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
}
