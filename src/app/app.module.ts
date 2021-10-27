import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { WiskeComponent } from './wiske/wiske.component';
import { SuskeComponent } from './suske/suske.component';
import { TitelbalkComponent } from './titelbalk/titelbalk.component';
import { StripfiguurComponent } from './stripfiguur/stripfiguur.component';
import { NamechangerPipe } from './namechanger.pipe';
import { FahrenheitPipe } from './fahrenheit.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    WiskeComponent,
    SuskeComponent,
    TitelbalkComponent,
    StripfiguurComponent,
    NamechangerPipe,
    FahrenheitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
