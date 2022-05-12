import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Airline } from '../shared/Airline.model';

@Component({
  selector: 'app-list-airline',
  templateUrl: './list-airline.component.html',
  styleUrls: ['./list-airline.component.css']
})
export class ListAirlineComponent implements OnInit {
  airlineList: Airline[] = [];
  // selectedairline : Airline = new Airline();
 
  constructor(private adminserives : AdminService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.adminserives.getAirline().subscribe(data=>{
      this.airlineList = data;
    });
    
  }

  // getairlinedetails(airlinename:any)
  // { 
  // const details =this.adminserives.getAirlinebyAirline(airlinename).subscribe(data=>
  //   if(details)
  //   this.airlineform.set
  // )
  // }

}
