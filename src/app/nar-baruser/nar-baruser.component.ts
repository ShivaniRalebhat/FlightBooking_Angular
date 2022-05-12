import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nar-baruser',
  templateUrl: './nar-baruser.component.html',
  styleUrls: ['./nar-baruser.component.css']
})
export class NarBaruserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
  }
  Logout()
  {
   // debugger;
    localStorage.setItem("emailid",(""));
       localStorage.setItem("assessToken",(""));
       this.router.navigateByUrl('login');
  }
}
