import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:5174/api/authenticate/register';
  private loginUrl = 'http://localhost:5174/api/authenticate/login';

  constructor(private http: HttpClient) {}

  register(username: string| null | undefined,
           email: string | null | undefined,
           password: string | null | undefined,
           confirmPassword: string | null | undefined): Observable<any> {
    return this.http.post(this.registerUrl, { username, email, password, confirmPassword });
  }

  logIn(username: string | null | undefined, password: string | null | undefined): Observable<any> {
    return this.http.post(this.loginUrl, { username, password });
  }
}
