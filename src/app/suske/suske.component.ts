import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suske',
  templateUrl: './suske.component.html',
  styleUrls: ['./suske.component.scss']
})
export class SuskeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output() naarBoven:EventEmitter<string> = new EventEmitter<string>();

  @Input() boodschap: string = "";
  bijtWiske(): void {
    console.log("gebeten!");
  }
  geefDoor(x:string){
    this.naarBoven.emit(x);
  }

}
