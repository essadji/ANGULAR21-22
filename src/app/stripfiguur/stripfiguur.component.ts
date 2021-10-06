import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stripfiguur',
  templateUrl: './stripfiguur.component.html',
  styleUrls: ['./stripfiguur.component.scss']
})
export class StripfiguurComponent implements OnInit {

  constructor() { }

  naam = "SUSKE";
  verborgen = true;

  ngOnInit(): void {
  }
  transgender() {
    this.naam = "WISKE (ex-Suske)"
  }
  doSomething() {
    console.log("doing IT!")
  }
  bijtWiske(): any {
    console.log("gebeten!");
    // document.querySelector("#wiskereactie").innerHTML="AUW!"
  }
  tellme() {
    console.log("telling!")
  }
  blabla:string = "";
  setBlabla(){
    this.blabla= "blabla set!";
    console.log("biting...")
  }
}
