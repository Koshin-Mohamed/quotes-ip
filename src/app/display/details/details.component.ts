import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../../quotes";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isSeen = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
    this.isSeen.emit(complete);
  }

  constructor() {}
  
  ngOnInit() {}
}
