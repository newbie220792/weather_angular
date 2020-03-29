import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private header = new HttpHeaders({
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Exprires: 'Sat, 01 Jan 2000 00:00:00 GMT'
  });

  //url
  private  URL : string = 'https://randomuser.me/api?result=5';
  constructor( private http: HttpClient) {
    this.http = http;
   }

  public getRandomUser(){
    return this.http.get<any>(this.URL,{headers: this.header,});
  }
}

