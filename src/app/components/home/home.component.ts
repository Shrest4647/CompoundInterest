import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photos: string[] = [
    './assets/images/calculation.png',
    './assets/images/compoundvssimple.png',
   './assets/images/compound-interest-formula.png',
   './assets/images/compound-interest-principal.png',
    './assets/images/compound.png'];

  constructor() { }

  ngOnInit() {
  }

}
