import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RateComponent } from './components/rate/rate.component';
import { AmountComponent } from './components/amount/amount.component';
import { TimeComponent } from './components/time/time.component';
import { InterestComponent } from './components/interest/interest.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule  } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RateComponent,
    AmountComponent,
    TimeComponent,
    InterestComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
