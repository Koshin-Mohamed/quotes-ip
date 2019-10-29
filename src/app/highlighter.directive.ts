import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem:ElementRef) { 
    let el  = this.elem.nativeElement;
    
    
  }
  
}
