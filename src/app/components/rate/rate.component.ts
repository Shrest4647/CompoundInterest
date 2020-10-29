import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  principal: number;
  time: number;
  amount: number;
  rate: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.rate = ((this.amount / this.principal) ** (1 / this.time) - 1) * 100;

  }

}
