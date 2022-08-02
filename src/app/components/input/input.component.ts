import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
 name = '';
  constructor(
    private calSV: CalculationService
  ) { }

  @Output() event: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  public n = 0;
  getNumber(n: any){
    console.log(n)
    return this.n = n.toString();
    //  this.calSV.setResult(n)
    //  console.log(this.calSV.setResult(n))
    // this.event.emit(n)
  }

  // getValue(){
  //   this.calSV.inputView += this.name
  // }
  
  calcula(){
    let a = this.getNumber(this.n);
    try {
      this.calSV.inputView = eval(this.getNumber(this.n));
    } catch (error) {
      alert("ERRROR")
    }
    

  }
}
