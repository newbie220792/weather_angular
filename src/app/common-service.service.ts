import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private randomUser;
  private header = new HttpHeaders({
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Exprires: 'Sat, 01 Jan 2000 00:00:00 GMT'
  });
  public userCount$ = new BehaviorSubject<number>(0);
  public maleCount$ = new BehaviorSubject<number>(0);
  public femaleCount$ = new BehaviorSubject<number>(0);
  // url
  constructor(private http: HttpClient) {
    this.http = http;
  }

  public getRandomUser() {
    const count = Math.floor(Math.random() * 30 ) + 5;
    return this.http.get<any>('https://randomuser.me/api/?results=' + count,
      { headers: this.header, });
  }
}
