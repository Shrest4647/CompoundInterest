import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RateComponent } from './components/rate/rate.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TimeComponent } from './components/time/time.component';
import { AmountComponent } from './components/amount/amount.component';
import { InterestComponent } from './components/interest/interest.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rate',
    component: RateComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: 'amount',
    component: AmountComponent
  },
  {
    path: 'interest',
    component: InterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
