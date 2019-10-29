import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quotes";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes (1, "Biggie Smalls", "\"As I leave my competition respirator style, climb the ladder to success escalator style\"", "Koshin", new Date(2019,12,19)),
    new Quotes (2, "Nipsey Hussle", "\"Never let a hard time humble us\"", "Salma", new Date(2020,7,14)),
    new Quotes (3, "Jay-Z", "\"Difficulty takes a day impossible takes a week\"", "Jibril", new Date(2023,8,16)),
  ];

  toggleUser(index){
    this.quotes[index].showUser = !this.quotes[index].showUser;
  }

  deleteIt(index){
      this.quotes.splice(index,1);
  }

  like = 0;
  likes(index){
    this.like=this.like+1;
  }

  unlike = 0
  unlikes(){
    this.unlike=this.unlike+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
