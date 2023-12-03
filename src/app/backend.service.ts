import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Canvaslist } from './model/Canvaslist.model';
import { retry, catchError } from 'rxjs/operators';
//import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private getCanvasListUrl: string =
    'http://localhost:8080/Restful-1.0-SNAPSHOT/api/canvas/data2';
  constructor(private HttpClient: HttpClient) {}
  
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
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
  };
  getItem(listId): Observable<Canvaslist> {
    return this.HttpClient
      .get<Canvaslist>(this.getCanvasListUrl + '/' + listId)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getCanvasList(): Observable<Canvaslist> {
    return this.HttpClient
      .get<Canvaslist>(this.getCanvasListUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
      }

  UpdateResult(listId, item): Observable<Canvaslist> {
    return this.HttpClient
    .put<Canvaslist>(this.getCanvasListUrl + '/' + listId, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  createItem(item): Observable<Canvaslist> {
    return this.HttpClient
      .post<Canvaslist>(this.getCanvasListUrl, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
    // Delete item by id
    deleteItem(id) {
      return this.HttpClient
        .delete<Canvaslist>(this.getCanvasListUrl + '/' + listId, this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
}
