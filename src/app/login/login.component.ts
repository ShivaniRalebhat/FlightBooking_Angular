import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  loginform : any;
  constructor(private authService : AuthService,private router :Router,private route: ActivatedRoute,private fb :FormBuilder,private loginservice :LoginService) { 
this.loginform = this.fb.group({
  email:['',[Validators.required]],
  password : ['',[Validators.required]]

});
  }

  ngOnInit(): void {
  }
  login()
  {
    console.log(this.email);
    this.loginservice.login(this.email,this.password).subscribe((res:any)=>{
      console.log(res);
      debugger;
     if(res.user !=undefined)
     {
      
       localStorage.setItem("emailid",JSON.stringify(res.user.emailid));
       localStorage.setItem("assessToken",JSON.stringify(res.token.assessToken));
       this.navigatebyUserRole(res.user);
     }
    })
    // this.authService.login(this.email, this.password)
    //      .subscribe( data => { 
    //         console.log("Is Login Success: " + data); 
      
    //        //if(data) this.router.navigate(['/expenses']); 
    //   });
  }
 navigatebyUserRole(user:any)
 {
   if(user.role =="admin")
   this.router.navigateByUrl('admin');
   if(user.role == "user")
   this.router.navigateByUrl('user');
   if(user.role == "notexist")
   this.router.navigateByUrl('login');

 }
}
