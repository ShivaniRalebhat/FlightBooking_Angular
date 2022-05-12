import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ExpenseGuard } from './expense.guard';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { ListAllflightComponent } from './list-allflight/list-allflight.component';
import { ListDiscountComponent } from './list-discount/list-discount.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NarBaruserComponent } from './nar-baruser/nar-baruser.component';
import { NavBaradminComponent } from './nav-baradmin/nav-baradmin.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : 'login',component: LoginComponent},
  {path : 'logout',component: LogoutComponent},
  {path : 'sign-up',component: SignUpComponent},
  {path : 'add-airline/:airline',component: AddAirlineComponent,canActivate: [ExpenseGuard]},
  {path : 'admin',component: NavBaradminComponent, canActivate: [ExpenseGuard]},
  {path : 'user', component : NarBaruserComponent,canActivate: [ExpenseGuard]},
  {path : 'add-flight/:flightno', component : AddFlightComponent, canActivate: [ExpenseGuard]},
  {path : 'list-flight', component : ListFlightComponent, canActivate: [ExpenseGuard]},
  {path : 'list-discount', component : ListDiscountComponent,canActivate: [ExpenseGuard]},
  {path : 'add-discount/:id', component : AddDiscountComponent,canActivate: [ExpenseGuard]},
  {path : 'allflight', component : ListAllflightComponent,canActivate: [ExpenseGuard]},
  {path : 'booking-history', component : BookingHistoryComponent,canActivate: [ExpenseGuard]},
  {path : 'viewflight/:flightno', component: FlightdetailsComponent,canActivate: [ExpenseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
