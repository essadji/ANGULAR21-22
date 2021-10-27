import { Component, OnInit, Input } from '@angular/core';
import { DayService } from '../day.service';

@Component({
  selector: 'stripfiguur',
  templateUrl: './stripfiguur.component.html',
  styleUrls: ['./stripfiguur.component.scss']
})
export class StripfiguurComponent implements OnInit {

  constructor(private dayService:DayService) { 
    this.dag2 = dayService.today;
  }
  @Input() dag:string ="";
  dag2:string ="";
  @Input() naam:string = "";
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
