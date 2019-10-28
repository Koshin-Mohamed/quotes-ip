import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quotes";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes (1, "Biggie Smalls", "\"As I leave my competition respirator style, climb the ladder to success escalator style\"", "Koshin"),
    new Quotes (2, "Nipsey Hussle", "\"Never let a hard time humble us\"", "Salma"),
    new Quotes (3, "Jay-Z", "\"Difficulty takes a day impossible takes a week\"", "Jibril"),
  ];

  toggleUser(index){
    this.quotes[index].showUser = !this.quotes[index].showUser;
  }

  constructor() { }

  ngOnInit() {
  }

}
