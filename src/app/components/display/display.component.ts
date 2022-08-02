import { Component, Input, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() ketQua = 0;
  constructor(public servideCal:CalculationService
   
  ) { 
    this.servideCal.inputView;
  }

  ngOnInit(): void {
  }


}
