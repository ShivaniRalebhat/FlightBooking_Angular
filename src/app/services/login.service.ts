import { HttpClient, HttpClientModule, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootUrl = 'http://localhost:9000';
  
  httpheader = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    
    })
    };
  constructor(private http : HttpClient) { }
//login(  emailid: any,password: any):Observable<any>{
  
 // return this.http.post(this.rootUrl + '/api/Admin/login?emailid='+emailid + '&password='+ password);
  //}
  login(emailid: any,password: any): Observable<any>
  {
    
    return this.http.post(this.rootUrl + '/api/Admin/login?emailid='+emailid + '&password='+ password,this.httpheader);
  }
getToken()
{
  return localStorage.getItem("assessToken");
}
getUsername()
{
  let user = localStorage.getItem('emailid');
  return JSON.parse(user ||'{}');
}
}
