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
  invisibilityCape:string = "no";
  onbekendeBijtWiske() {
    this.gebeten = true;
  }
  geefBoodschapDoor(x:string): void {
    console.log(x);
    this.bericht = x;

  }
  doeIetsMet(x:string){
    this.vanBeneden = x;
  }
  putCape(capeType:string): void{
    this.invisibilityCape = capeType;
  }
  figuur:string = "Lambik";
  day:string="saturday";
  figuren:string[] = ["Lambik", "Jerom", "Suske"]
  temperature: number = 0;
  setTemperature(x:any){
    this.temperature = x.target.value;
    console.log(x.target.value)
  }
}
