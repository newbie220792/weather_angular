import { Injectable } from '@angular/core';
import { ServiceHttpService } from '../service-http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private serviceHttp: ServiceHttpService
  ) {
    this.serviceHttp.httpHeaders = new HttpHeaders({
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Exprires: 'Sat, 01 Jan 2000 00:00:00 GMT'
    });
  }

}
