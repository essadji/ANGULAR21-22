import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wiske',
  templateUrl: './wiske.component.html',
  styleUrls: ['./wiske.component.scss']
})
export class WiskeComponent implements OnInit {

  constructor() { }

  @Input() isGebeten: any = false;

  typeGebeten: string = typeof this.isGebeten;
  
  ngOnInit(): void {
  }

}
