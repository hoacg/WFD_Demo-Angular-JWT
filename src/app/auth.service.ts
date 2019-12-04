import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signin(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.httpClient.post('http://localhost:5000/authentication', user);
  }
}
