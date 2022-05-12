import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Airline } from '../shared/Airline.model';
import { Discount } from '../shared/Discount.model';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  readonly rootUrl = 'http://localhost:9000';
  detail :Airline = new Airline();
  httpheader = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })
    };

  constructor(private http: HttpClient) { }

  addAirline(data: any): Observable<any>
  {
    return this.http.post(this.rootUrl + '/api/v1.01/Airline/saveairline', data);
  }

  getAirline(): Observable<Airline[]>{

    //const headers = { 'content-type': 'application/json'}
    //const body=JSON.stringify(data);
    
    return this.http.get<Airline[]>(this.rootUrl + '/api/v1.01/Airline/GetAirlinelist', this.httpheader)
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
    getAirlinebyAirline(airline:string): Observable<any>{

      //const headers = { 'content-type': 'application/json'}
      //const body=JSON.stringify(data);
      
      return this.http.get<Airline[]>(this.rootUrl + '/api/v1.01/Airline/GetAirlinelistbyairline?airline='+airline, this.httpheader)
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

      getinventorylist(): Observable<Flight[]>{

        return this.http.get<Flight[]>(this.rootUrl + '/api/v1.01/Airline/GetInventoryList', this.httpheader)
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

        getinventorybyid(flightno:any): Observable<any>{

          //const headers = { 'content-type': 'application/json'}
          //const body=JSON.stringify(data);
          
          return this.http.get<Flight[]>(this.rootUrl + '/api/v1.01/Airline/getinventorybyid?flightno='+flightno, this.httpheader)
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
      
          saveflightschedule(data: any): Observable<any>
          {
            return this.http.post(this.rootUrl + '/api/v1.01/Airline/saveinventory', data);
          }

          getAirlinedrpdwn(): Observable<Airline[]>{

            //const headers = { 'content-type': 'application/json'}
            //const body=JSON.stringify(data);
            
            return this.http.get<Airline[]>(this.rootUrl + '/api/v1.01/Airline/getairlinedrpdwn', this.httpheader)
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
        
            getdiscountlist(): Observable<Discount[]>{

              //const headers = { 'content-type': 'application/json'}
              //const body=JSON.stringify(data);
              
              return this.http.get<Discount[]>(this.rootUrl + '/api/v1.01/Booking/getdiscountlist', this.httpheader)
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
         
              savediscount(data: any): Observable<any>
              {
                return this.http.post(this.rootUrl + '/api/v1.01/Booking/adddiscount', data);
              }

              getdiscountlistbyid(id:any): Observable<any>{

                //const headers = { 'content-type': 'application/json'}
                //const body=JSON.stringify(data);
                
                return this.http.get<Discount[]>(this.rootUrl + '/api/v1.01/Booking/getdiscountlistbyid?id='+id, this.httpheader)
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
