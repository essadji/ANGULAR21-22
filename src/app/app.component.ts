import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Kiekeboe';
  gebeten: boolean = false;
  bericht:string = "";
  vanBeneden:string="";
  onbekendeBijtWiske() {
    this.gebeten = true;
  }
  geefBoodschapDoor(x:string) {
    console.log(x);
    this.bericht = x;

  }
  doeIetsMet(x:string){
    this.vanBeneden = x;
  }
}
