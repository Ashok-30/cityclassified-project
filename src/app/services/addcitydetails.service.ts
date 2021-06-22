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

  getCityInfos(cityId: number){
    return this.http.get(this.apiUrl + '/cityinfos/city/' + cityId);
  }

  getCityInfosForType(cityId: number, typeId: number){
    console.log(this.apiUrl + '/cityinfos/city,type/' + cityId + '/' + typeId)
    return this.http.get(this.apiUrl + '/cityinfos/city,type/' + cityId + '/' + typeId)
  }

}