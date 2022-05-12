import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Discount } from '../shared/Discount.model';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {
  discountform : any;
  id:any=0;
discount : Discount={
  id: undefined,
  vouchercode: undefined,
  totaldiscount: undefined,
  isactive: undefined
}
  constructor(private adminservices :AdminService,
    private route :ActivatedRoute,
    private router : Router,
    private fb : FormBuilder) { 
      this.discountform = this.fb.group({
        vouchercode: ['', [Validators.required]],
        totaldiscount: ['', [Validators.required]],
        id : [],
      isactive:[]
      });
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //alert(this.id);
      if (params['id'] != null) {
        this.discountform.get('id')?.setValue(params['id']);
        //const data = this.airlineService.getAirlinebyAirline(this.airlinename);
        this.adminservices.getdiscountlistbyid(this.id).subscribe((res:any)=>{
           //debugger;
           console.log(res);
           this.discountform.setValue({
             id: res.model.id,
             vouchercode: res.model.vouchercode,
             totaldiscount:res.model.totaldiscount,
            isactive : res.model.isactive
           })
         })
       
        
      }
    });
  }
  save()
  {
    console.log(this.discount);
   // debugger;
  this.adminservices.savediscount(this.discount).subscribe((res:any)=>{
    console.log(res);
  })
}
}
