import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { BookingHistrory } from '../shared/Booking.model';
import { Discount } from '../shared/Discount.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  readonly rootUrl = 'http://localhost:9000';
  httpheader = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })
    };
  emailid :string = JSON.parse(localStorage.getItem('emailid')|| "{}");
  constructor(private http: HttpClient) { }

  getbookingHistory(): Observable<BookingHistrory[]>{

    return this.http.get<BookingHistrory[]>(this.rootUrl + '/api/v1.01/Booking/History/'+this.emailid, this.httpheader)
    .pipe(
    map(res =>{
    console.log("data:", res);
    return res;
    }),
    catchError((err) => {
    console.error(err);
    throw err;
    })
    );
    }
    cancelbooking(pnr:any): Observable<any>{

      return this.http.post<BookingHistrory[]>(this.rootUrl + '/api/v1.01/Booking/cancel/'+pnr, this.httpheader)
      .pipe(
      map(res =>{
      console.log("data:", res);
      return res;
      }),
      catchError((err) => {
      console.error(err);
      throw err;
      })
      );
      }
  
      AddPassenger(data: any): Observable<any>
      {
        return this.http.post(this.rootUrl + '/api/v1.01/Booking/savepassanger', data);
      }

      BookTicket(data: any): Observable<any>
      {
        return this.http.post(this.rootUrl + '/api/v1.01/Booking/Bookticket', data);
      }
      discountdrpdwn(): Observable<Discount[]>{

        return this.http.get<Discount[]>(this.rootUrl + '/api/v1.01/Booking/getdiscountlistdrpdwn', this.httpheader)
        .pipe(
        map(res =>{
        console.log("data:", res);
        return res;
        }),
        catchError((err) => {
        console.error(err);
        throw err;
        })
        );
        }
     
}
