import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { Passenger } from '../shared/Passenger.model';

@Component({
  selector: 'app-passenger-popup',
  templateUrl: './passenger-popup.component.html',
  styleUrls: ['./passenger-popup.component.css']
})
export class PassengerPopupComponent implements OnInit {
  emailid :any;
  passengermodel :Passenger={
    seatno: undefined,
    name: undefined,
    age: undefined,
    pnr: undefined,
    gender: undefined,
    emailid : JSON.parse(localStorage.getItem('emailid')|| "{}"),
    flightno: JSON.parse(localStorage.getItem('flightno')|| "{}")
  }
  PassengerForm :any;
  flightno :any;
  //emailid :any;
  //emailid = localStorage.getItem('emailid');
  constructor(private bookingservice : BookingService,private route:ActivatedRoute, private router:Router,private fb :FormBuilder) {

    this.PassengerForm = this.fb.group({
      seatno: ['', [Validators.required]],
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    pnr: [''],
    gender: ['', [Validators.required]]
   
    })
   }

  Add()
  {
this.bookingservice.AddPassenger(this.passengermodel).subscribe(data=>{
alert("Passenger Added Successfully");
})
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.flightno = params['flightno'];
      
    // })
    console.log(JSON.parse(localStorage.getItem('flightno')|| "{}"));
  }

}
