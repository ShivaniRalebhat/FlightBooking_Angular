import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Flight } from '../services/flight.model';
import { Airline } from '../shared/Airline.model';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flightno : string ="";
  flightform : any;
  airlineList: Airline[] = [];
  flight : Flight ={
    airline: '',
    fromplace: '',
    toplace: '',
    isactive: true,
    flightno: undefined,
    startdate: undefined,
    enddate: undefined,
    scheduleddays: undefined,
    instrument: undefined,
    ticketcost: undefined,
    rowsno: undefined,
    meal: undefined,
    isroundtrip: undefined
  };

  constructor(private adminserives : AdminService, private route: ActivatedRoute,private router:Router, private fb: FormBuilder,) {
    this.flightform = this.fb.group({
      airline: ['', [Validators.required]],
      fromplace: ['', [Validators.required]],
      toplace: ['', [Validators.required]],
      isactive: ['', [Validators.required]],
      flightno: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
      scheduleddays: ['', [Validators.required]],
      instrument: ['', [Validators.required]],
      ticketcost: ['', [Validators.required]],
      rowsno: ['', [Validators.required]],
      meal: ['', [Validators.required]],
      isroundtrip: ['', [Validators.required]],
    }

    )
   }

  ngOnInit(): void {
    this.getAirlinedrpdwn();
    this.route.params.subscribe(params => {
      this.flightno = params['flightno'];
      if (params['flightno'] != null) {
        this.flightform.get('flightno')?.setValue(params['flightno']);
        //const data = this.airlineService.getAirlinebyAirline(this.airlinename);
        console.log(this.flightno);
        this.adminserives.getinventorybyid(this.flightno).subscribe((res:any)=>{
           debugger;
           console.log(res);
           this.flightform.setValue({
            airline: res.model.airline,
            fromplace: res.model.fromplace,
            toplace: res.model.toplace,
            isactive: res.model.isactive,
            flightno: res.model.flightno,
            startdate: res.model.startdate,
            enddate: res.model.enddate,
            scheduleddays: res.model.scheduleddays,
            instrument: res.model.instrument,
            ticketcost: res.model.ticketcost,
            rowsno: res.model.rowsno,
            meal: res.model.meal,
            isroundtrip: res.model.isroundtrip
           })
         })
       
        
      }
    })
  }

  save()
{
  this.adminserives.saveflightschedule(this.flight).subscribe((res:any)=>{
  
  });
}
getAirlinedrpdwn()
{
  this.adminserives.getAirlinedrpdwn().subscribe(data=>{
    console.log(data);
    this.airlineList = data;
  });
}
}
