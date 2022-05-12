import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { BookingHistrory } from '../shared/Booking.model';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
bookinghistory : BookingHistrory[] = [];
emailid = localStorage.getItem('emailid');
searchText :any;
  constructor(private bookingservice :BookingService, private route :ActivatedRoute,private router :Router ) { }

  ngOnInit(): void {
    
    this.bookingservice.getbookingHistory().subscribe(data=>{
      console.log(data);
      this.bookinghistory = data;
    })
  }

  cancel(pnr:any)
  {
alert(pnr);
this.bookingservice.cancelbooking(pnr).subscribe(data=>{
  alert("Ticket Cancel Successfully");
  this.router.navigateByUrl('booking-history');
})
  }

}
