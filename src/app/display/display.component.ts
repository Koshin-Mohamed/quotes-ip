import { Component, OnInit } from "@angular/core";
import { Quotes } from "../quotes";


@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      "Biggie Smalls",
      '"As I leave my competition respirator style, climb the ladder to success escalator style"',
      "Koshin",
      new Date(2018, 3, 18)
    ),
    new Quotes(
      2,
      "Nipsey Hussle",
      '"Never let a hard time humble us"',
      "Salma",
      new Date(2019, 2, 4)
    ),
    new Quotes(
      3,
      "Jay-Z",
      '"Difficulty takes a day impossible takes a week"',
      "Jibril",
      new Date(2017, 4, 31)
    )
  ];

  toggleUser(index) {
    this.quotes[index].showUser = !this.quotes[index].showUser;
  }

  deleteIt(index) {
    var message = confirm(
      `Are you sure you want to delete ${this.quotes[index].quote}?`
    );
    if (message) {
      this.quotes.splice(index, 1);
    }
  }

  likes(index) {
    this.quotes[index].likes += 1;
  }

  unlikes(index) {
    this.quotes[index].unlikes += 1;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  
  preNum:number
  lastNum:number
  counter:number

  highestLikes(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].likes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() {}

  ngOnInit() {}
}
