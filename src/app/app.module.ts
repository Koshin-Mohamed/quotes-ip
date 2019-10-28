import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { DisplayComponent } from "./display/display.component";
import { DetailsComponent } from "./display/details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    DetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
