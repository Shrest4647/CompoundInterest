import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  principal: number;
  time: number;
  amount: number;
  rate: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.principal = this.amount / (1 + this.rate / 100) ** this.time;

  }

}
