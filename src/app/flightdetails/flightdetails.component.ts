import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Flight } from '../services/flight.model';
import { Airline } from '../shared/Airline.model';
import { BookingHistrory } from '../shared/Booking.model';
import { MatDialog } from  '@angular/material/dialog';
import { PassengerPopupComponent } from '../passenger-popup/passenger-popup.component';
import { BookingService } from '../services/booking.service';
import { Discount } from '../shared/Discount.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {
  flightno : string ="";
  Bookform : any;
  airlineList: Airline[] = [];
  bookinghistory : BookingHistrory ={
    pnr: undefined,
    flightno: undefined,
    emailid: JSON.parse(localStorage.getItem('emailid')|| "{}"),
    totalpassanger: undefined,
    meal: undefined,
    airline : undefined,
    ticketcost :undefined,
    totaldiscount :undefined
  };
  discountlist : Discount[] =[];

  constructor(private bookingservices : BookingService, private  dialogRef : MatDialog,private adminserives : AdminService, private route: ActivatedRoute,private router:Router, private fb: FormBuilder,) {
    this.Bookform = this.fb.group({
      pnr: [''],
    flightno: ['', [Validators.required]],
    emailid: ['', [Validators.required]],
    totalpassanger: ['', [Validators.required]],
    meal: ['', [Validators.required]],
    airline :['', [Validators.required]],
    ticketcost :['', [Validators.required]],
    totaldiscount :[]
    })
  }
  backcost:any;
  AddPassanger()
  {
    this.dialogRef.open(PassengerPopupComponent);
  }

  BookTicket()
  {
    this.bookingservices.BookTicket(this.bookinghistory).subscribe(data=>{
console.log(data);
this.dialogRef.closeAll();
this.router.navigateByUrl('allflight');
    })
  }
  getAirlinedrpdwn()
  {
    this.adminserives.getAirlinedrpdwn().subscribe(data=>{
      console.log(data);
      this.airlineList = data;
    });
  }
  getdiscountlist()
  {
    this.bookingservices.discountdrpdwn().subscribe(data=>{
      this.discountlist = data;
    })
  }
  onOptionsSelected(value:any){
    const res =  this.backcost - value;
   
    this.Bookform.get('ticketcost')?.setValue(res);
}
  ngOnInit(): void {
    this.getdiscountlist();
   
    this.route.params.subscribe(params => {
      this.flightno = params['flightno'];
     
      if (params['flightno'] != null) {
        this.Bookform.get('flightno')?.setValue(params['flightno']);
       
        console.log(this.flightno);
        localStorage.setItem('flightno',this.flightno);
        this.adminserives.getinventorybyid(this.flightno).subscribe((res:any)=>{
          // debugger;
          
           this.backcost = res.model.ticketcost;
           console.log(this.backcost);
           this.Bookform.setValue({
           
            flightno: res.model.flightno,
            
            ticketcost: res.model.ticketcost,
           pnr : '',
        emailid: localStorage.getItem('emailid'),
        totalpassanger: '',
        meal: '',
        airline :res.model.airline,
        totaldiscount:''
           })
         })
       
        
      }
    })
  }

}
