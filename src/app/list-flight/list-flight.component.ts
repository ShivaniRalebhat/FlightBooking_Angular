import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Flight } from '../services/flight.model';

@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit {
flightList : Flight[] =[];

  constructor(private adminServices : AdminService,private route :RouterModule,private router : Router) { }

  ngOnInit(): void {
    this.adminServices.getinventorylist().subscribe(data=>{
      console.log(data);
      this.flightList = data;
    })
  }

}
