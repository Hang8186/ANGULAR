import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
inputView=''
  constructor() { }

  private result = 0;
input = '';
  setResult(newNumber: number){
    this.result = newNumber;
  }

  getResult(){
    return this.result;
  }
}
