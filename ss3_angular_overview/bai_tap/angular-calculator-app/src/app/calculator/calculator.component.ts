import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  operator: string;
  result: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  public calculate(id1, id2) {
    if (isNaN(id1) || isNaN(id2)) {
      this.result = "Error";
    } else {
      switch (this.operator) {
        case '+':
          this.result = Number(id1) + Number(id2);
          break
        case '-':
          this.result = id1 - id2;
          break
        case '*':
          this.result = id1 * id2;
          break
        case '/':
          this.result = id1 / id2;
          break
      }
    }
  }
}
