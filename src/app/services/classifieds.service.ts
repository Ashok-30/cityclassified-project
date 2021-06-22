import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassifiedsService {

  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getClassifiedById(classifiedId: string){
    return this.http.get(this.apiUrl + '/classifieds/' + classifiedId);
  }

  getAllClassifiedsOfAUser(username: string){
    return this.http.get(this.apiUrl + '/classifieds/user/' + username);
  }

  getAllClassifiedsForCity(cityId: number){
    return this.http.get(this.apiUrl + '/classifieds/city/' + cityId);
  }

  getAllClassifiedsByCategory(category: string){
    return this.http.get(this.apiUrl + '/classifieds/category/' + category);
  }

  postClassified(post: any){
    return this.http.post(this.apiUrl + '/classifieds/classified', post);
  }

  updateClassified(classified: any){
    return this.http.put(this.apiUrl + '/classifieds/classified', classified);
  }

  deleteClassified(classifiedId: number){
    return this.http.delete(this.apiUrl + '/classifieds/classified/' + classifiedId,  {responseType: 'text'});
  }

}
