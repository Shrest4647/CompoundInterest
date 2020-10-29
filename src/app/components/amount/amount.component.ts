import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  principal: number;
  time: number;
  amount: number;
  rate: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.amount = this.principal * (1 + this.rate / 100) ** this.time;

  }


}
