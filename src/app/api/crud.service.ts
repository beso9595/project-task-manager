import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl + url);
  }

  get(url: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + url);
  }

  post(url: string, body: T): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body);
  }

  put(url: string, id: number, body: T): Observable<T> {
    return this.http.put<T>(this.apiUrl + url + '/' + id, body);
  }

  delete(url: string, id: number): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url + '/' + id);
  }

}
