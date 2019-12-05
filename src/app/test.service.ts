import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<any> {
    const url = 'http://localhost:5000/api/students';
    const token = localStorage.getItem('ACCESS_TOKEN');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };

    return this.httpClient.get( url, httpOptions);
  }
}
