import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Ladok } from './model/ladok.model';
import { Ladoklist } from './model/ladoklist.model';
import { Epok } from './model/epok.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private setResultUrl: string =
    'http://localhost:8080/Restful-1.0-SNAPSHOT/api/setResult';
  private getLadokListUrl: string =
    'http://localhost:8080/Restful-1.0-SNAPSHOT/api/ladok/{kurskod}';
  private getKurserUrl: string =
    'http://localhost:8080/Restful-1.0-SNAPSHOT/api/epok/kurser';

  constructor(private HttpClient: HttpClient, private Ladoklist: Ladoklist) {}

  setResult(ladok: Ladok) {
    return this.HttpClient.post(this.setResultUrl, ladok, {
      observe: 'response',
    });
  }
  getLadokList(): Observable<Ladoklist[]> {
    return this.HttpClient.get(this.getLadokListUrl).pipe<Ladoklist[]>(
      map((data: any) => data.Ladoklist)
    );
  }

  getKurser(kursKod: Epok) {
    return this.HttpClient.get(this.getKurserUrl);
  }
  
  UpdateResult(ladoklist: Ladoklist): Observable<Ladoklist> {
    return this.HttpClient.patch<Ladoklist>(`${this.getLadokListUrl}/${ladoklist.ladokId}`, ladoklist)
  }
}
