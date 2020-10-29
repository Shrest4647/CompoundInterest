import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  principal: number;
  time: number;
  amount: number;
  rate: number;
  interest: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.time = Math.log(this.amount / this.principal) / Math.log(1 + this.rate / 100);
    this.time = Math.ceil(this.time);
  }

}
