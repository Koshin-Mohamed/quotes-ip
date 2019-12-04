import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { DisplayComponent } from "./display/display.component";
import { DetailsComponent } from "./display/details/details.component";
import { FormsModule } from "@angular/forms";
import { HighlighterDirective } from './highlighter.directive';
import {TimeAgoPipe} from 'time-ago-pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    DetailsComponent,
    HighlighterDirective,
    TimeAgoPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
