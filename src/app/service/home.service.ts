import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderItem } from '../models/OrderItem';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private REST_API_SERVER_ORDERITEM = "http://localhost:8080/api/orderItems";
  constructor(private httpClient: HttpClient) { }

  public getOderItem(): Observable<any> {
    const url = this.REST_API_SERVER_ORDERITEM;
    return this.httpClient.get<any>(url, httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, `+ `body was: ${error.error}`
      );
    }
    return throwError('St bad happend; plz try again later.');
  }
}
