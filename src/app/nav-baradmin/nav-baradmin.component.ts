import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-baradmin',
  templateUrl: './nav-baradmin.component.html',
  styleUrls: ['./nav-baradmin.component.css']
})
export class NavBaradminComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

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
