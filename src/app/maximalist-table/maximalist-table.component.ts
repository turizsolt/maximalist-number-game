import { Component, OnInit } from '@angular/core';
import {MaximalistTableService} from "../maximalist-table.service";

@Component({
  selector: 'app-maximalist-table',
  templateUrl: './maximalist-table.component.html',
  styleUrls: ['./maximalist-table.component.css']
})
export class MaximalistTableComponent implements OnInit {
  table:number[][];
  lastClicked:number=-1;
  maximum:number[];
  rowHeaders:string[];
  columnHeaders:string[];
  right:number = 0;
  wrong:number = 0;

  constructor(public service:MaximalistTableService) {

  }

  ngOnInit() {
    this.clear();
  }

  onHeaderClick(i:number) {
    if(this.lastClicked === -1) {
      this.solve(i);
    } else {
      this.clear();

    }
  }

  private solve(i: number) {
    this.service.selectSolution(i);
    this.maximum = this.service.getMaximum();
    this.right = this.service.getRight();
    this.wrong = this.service.getWrong();
    this.lastClicked = i;
  }

  private clear() {
    this.service.clear();
    this.table = this.service.getTable();
    this.right = this.service.getRight();
    this.wrong = this.service.getWrong();
    this.maximum = this.service.getMaximum();
    this.columnHeaders = this.service.getColumnHeaders();
    this.rowHeaders = this.service.getRowHeaders();
    this.lastClicked = -1;
  }
}
