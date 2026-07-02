import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = environment.authBaseUrl;
  constructor(private _http: HttpClient) {}

  logIn(userDeatils: any) {
    let LOGIN_URL = `${this.BASE_URL}/api/auth/login`;
    return this._http.post<any>(LOGIN_URL, userDeatils);
  }

  signin(userDetails : any): Observable<any>{
    let SIGN_IN_URL = `${this.BASE_URL}/api/auth/register`;
    return this._http.post<any>(SIGN_IN_URL,userDetails);

  }
  logout() : Observable<any> {
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    return of({
      msg : `Logout successfully...!`
    })
  }

  saveToken(token: string) {
    return localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  saveUser(userRole : string){
    return localStorage.setItem('userRole' ,userRole);
  }
  getUser() : string | null{
    return localStorage.getItem('userRole')
  }
}
