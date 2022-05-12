import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Flight } from '../services/flight.model';

@Component({
  selector: 'app-list-allflight',
  templateUrl: './list-allflight.component.html',
  styleUrls: ['./list-allflight.component.css']
})
export class ListAllflightComponent implements OnInit {
  flightList : Flight[] =[];
  searchText :any;
  constructor(private adminServices : AdminService,private route :RouterModule,private router : Router) { }

  ngOnInit(): void {
    this.adminServices.getinventorylist().subscribe(data=>{
      console.log(data);
      this.flightList = data;
    })
  }

}
