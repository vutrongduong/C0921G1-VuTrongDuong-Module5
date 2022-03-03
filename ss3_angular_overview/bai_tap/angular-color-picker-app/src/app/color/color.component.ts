import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  styleColor: string;
  isShow = false;
  arr = ["C++","C","RS"];

  constructor() {
  }

  ngOnInit(): void {

  }

  changeColor(color) {
    this.styleColor = color;
  }
}
