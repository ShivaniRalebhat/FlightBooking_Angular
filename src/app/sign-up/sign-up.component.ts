import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
//import { User } from '../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
// public user: User;
 user = new User();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService :UserService) { 
    
  }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form !=null)
    form.reset();
    this.user = {
      UserName : '',
      Password : '',
      emailid : '',
      isactive : ''
    }
  }
  OnSubmit(form : NgForm)
  {
    this.userService.registerUser(form.value)
    .subscribe((data:any) =>{
      if(data.Succeeded == true)
        this.resetForm(form);
    });
  }

}
