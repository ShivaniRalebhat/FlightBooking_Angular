import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from '@angular/http'; 
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly rootUrl = 'http://localhost:9000';

  
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any>
  {
    const body :User = {
      UserName : user.UserName,
      Password : user.Password,
      emailid : user.emailid,
      isactive : user.isactive
    }
    return this.http.post(this.rootUrl + '/api/User/saveuser', body);
  }
}
