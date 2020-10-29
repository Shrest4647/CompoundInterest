import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  principal: number;
  time: number;
  amount: number;
  rate: number;
  interest: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.amount = this.principal * (1 + this.rate / 100) ** this.time + this.principal;

  }

}
