import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Airline } from '../shared/Airline.model';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  airlineform : any;
  airlinename :string ="";
  
  airline : Airline ={
airline : '',
contactaddress :'',
contactnumber : '',
isactive : true
  };

  constructor( private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private airlineService : AdminService) {
      this.airlineform = this.fb.group({
        airline: ['', [Validators.required]],
        contactaddress: ['', [Validators.required]],
        contactnumber: ['', [Validators.required]],
      isactive:[]
      });
     }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.airlinename = params['airline'];
      
      if (params['airline'] != null) {
        this.airlineform.get('airline')?.setValue(params['airline']);
        //const data = this.airlineService.getAirlinebyAirline(this.airlinename);
        this.airlineService.getAirlinebyAirline(this.airlinename).subscribe((res:any)=>{
          // debugger;
           console.log(res);
           this.airlineform.setValue({
             airline: res.details.airline,
       contactaddress: res.details.contactaddress,
       contactnumber:res.details.contactnumber,
       isactive : res.details.isactive
           })
         })
       
        
      }
    });
  }
  

save()
{
  console.log(this.airline);
 // debugger;
this.airlineService.addAirline(this.airline).subscribe((res:any)=>{
  console.log(res);
})

}
}
function res(res: any, any: any) {
  throw new Error('Function not implemented.');
}



