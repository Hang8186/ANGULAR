import { Component } from '@angular/core';
import { CalculationService } from './services/calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_01'; 
  constructor( private calculationSV:CalculationService){}

  onEvent(event:any){
    this.kq = event;
  }

  public kq = 0;


  getKQ(){
    this.kq = this.calculationSV.getResult();
  }
}
