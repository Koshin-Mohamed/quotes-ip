import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './display/add/add.component';
import { UpAndDownvoteComponent } from './display/up-and-downvote/up-and-downvote.component';
import { DeleteComponent } from './display/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    AddComponent,
    UpAndDownvoteComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
