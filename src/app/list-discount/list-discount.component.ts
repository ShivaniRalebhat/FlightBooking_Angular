import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Discount } from '../shared/Discount.model';

@Component({
  selector: 'app-list-discount',
  templateUrl: './list-discount.component.html',
  styleUrls: ['./list-discount.component.css']
})
export class ListDiscountComponent implements OnInit {
discountlist : Discount[]=[];
  constructor(private adminservices :AdminService,
    private route :ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
    this.adminservices.getdiscountlist().subscribe(data=>{
      this.discountlist = data;
    });
  }

}
