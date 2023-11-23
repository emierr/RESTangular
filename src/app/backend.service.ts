import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs';

import { Ladok } from './model/ladok.model';
import { Ladoklist } from './model/ladoklist.model';
import { Epok } from './model/epok.model';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

private setResultUrl: string = 'http://localhost:8080/Restful-1.0-SNAPSHOT/api/setResult'; 
private getLadokListUrl: string = 'http://localhost:8080/Restful-1.0-SNAPSHOT/api/ladok/{kurskod}';
private getKurserUrl: string = 'http://localhost:8080/Restful-1.0-SNAPSHOT/api/epok/kurser';

  constructor(private HttpClient: HttpClient) { }

  setResult(ladok: Ladok){
    return this.HttpClient.post(this.setResultUrl, ladok, {observe: 'response'});
  }
  getLadokList(ladoklist: Ladoklist){
    return this.HttpClient.get(this.getLadokListUrl,)
  }
  getKurser(kursKod: Epok){
    return this.HttpClient.get(this.getKurserUrl, )

  }
}
