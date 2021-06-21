import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassifiedsService {

  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllClassifiedsOfAUser(username: string){
    return this.http.get(this.apiUrl + '/classifieds/user/' + username);
  }

  postClassified(post: any){
    return this.http.post(this.apiUrl + '/classifieds/classified', post);
  }

}
