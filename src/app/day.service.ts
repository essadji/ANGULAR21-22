import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor() { }
  today:string = "wednesday";
  tellMeTheDay(){return "monday";}
  tellMeTheDay2(){return "tuesday";}
}
