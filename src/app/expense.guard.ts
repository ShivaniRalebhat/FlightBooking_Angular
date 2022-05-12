import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate()
  {
  var isAuthenticated = this.authService.gettoken();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
  this.router.navigate(['/login']);
  }
  return isAuthenticated;
 }
}
 
 
  

