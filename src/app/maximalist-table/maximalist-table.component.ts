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
    this.service.clear();
    this.table = this.service.getTable();
    let {right, wrong} = this.service.getRightWrong();
    this.right = right;
    this.wrong = wrong;
    this.maximum = this.service.getMaximum();
    this.columnHeaders = this.service.getColumnHeaders();
    this.rowHeaders = this.service.getRowHeaders();
  }

  onHeaderClick(i:number) {
    if(this.lastClicked === -1) {
      this.service.selectSolution(i);
      this.lastClicked = i;
    } else {
      this.service.clear();
      this.table = this.service.getTable();
      let {right, wrong} = this.service.getRightWrong();
      this.right = right;
      this.wrong = wrong;
      this.maximum = this.service.getMaximum();
      this.columnHeaders = this.service.getColumnHeaders();
      this.rowHeaders = this.service.getRowHeaders();

      this.lastClicked = -1;
    }
  }
}
