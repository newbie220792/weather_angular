import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServiceHttpService {
  public url: string; // this url is declare by service
  // this is header
  public httpHeaders;

  constructor(private httpClient: HttpClient) { }

  // get
  public get() {
    return this.httpClient
      .get<any[]>(this.url, this.httpHeaders)
      .pipe(catchError(this.handleError));
  }

  // post
  public post(data) {
    return this.httpClient
      .post<any>(this.url, data, this.httpHeaders)
      .pipe(catchError(this.handleError));
  }

  // delete
  public delete(data: any) {
    return this.httpClient
      .delete<any>(this.url)
      .pipe(catchError(this.handleError));
  }

  // update
  public put(data: any) {
    return this.httpClient
      .put(this.url, data, this.httpHeaders)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
