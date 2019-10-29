import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuotes=new Quotes(0,"","","",new Date());

  @Output() addQuotes=new EventEmitter<Quotes>();

  constructor() { }

  ngOnInit() {
  }

}
