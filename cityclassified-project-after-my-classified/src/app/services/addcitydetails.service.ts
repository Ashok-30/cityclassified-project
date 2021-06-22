import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddcitydetailsService {
  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  postCitydetails(post: any){
    return this.http.post(this.apiUrl + '/cityinfos/cityinfo', post);
  }
  updateCityDetails(detail: any){
    return this.http.put(this.apiUrl + '/cityinfos/cityinfo', detail);
  }
  deleteCityDetails(infoId: number){
    return this.http.delete(this.apiUrl + '/cityinfos/' + infoId,  {responseType: 'text'});
  }
 
}