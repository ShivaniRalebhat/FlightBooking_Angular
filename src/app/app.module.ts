import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { ListAirlineComponent } from './list-airline/list-airline.component';
import { NavBaradminComponent } from './nav-baradmin/nav-baradmin.component';
import { LoginComponent } from './login/login.component';
import { NarBaruserComponent } from './nar-baruser/nar-baruser.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { ListDiscountComponent } from './list-discount/list-discount.component';
import { ListAllflightComponent } from './list-allflight/list-allflight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PassengerPopupComponent } from './passenger-popup/passenger-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AddAirlineComponent,
    ListAirlineComponent,
    NavBaradminComponent,
    LoginComponent,
    NarBaruserComponent,
    AddFlightComponent,
    ListFlightComponent,
    AddDiscountComponent,
    ListDiscountComponent,
    ListAllflightComponent,
    BookingHistoryComponent,
    FlightdetailsComponent,
    LogoutComponent,
    PassengerPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
