import { Injectable } from '@angular/core';

@Injectable()
export class MaximalistTableService {
  private right:number = 0;
  private wrong:number = 0;

  private table:number[][];
  private rowHeaders:string[];
  private columnHeaders:string[];

  private sums:number[];
  private lastClicked:number=-1;
  private maximum:number[];

  constructor() {
    this.resetAll();
  }

  private resetAll() {
    this.generateTable();
    this.countSums();
    this.resetHeaders();
    this.resetMaximums();
  }

  private resetMaximums() {
    this.maximum = [];
  }

  private resetHeaders() {
    this.rowHeaders = ['A', 'B', 'C', 'D', 'E'];
    this.columnHeaders = ['F', 'G', 'H', 'I', 'J'];
  }

  private generateTable() {
    this.table = [];
    for (let i: number = 0; i < 5; i++) {
      this.table[i] = [];
      for (let j: number = 0; j < 5; j++) {
        this.table[i][j] = Math.random() * 10 | 0;
      }
    }
  }

  private countSums() {
    this.sums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i: number = 0; i < 5; i++) {
      for (let j: number = 0; j < 5; j++) {
        this.sums[i] += this.table[i][j];
        this.sums[j + 5] += this.table[i][j];
      }
    }
  }

  private determineMaximums() {
    let max: number = -1;
    for (let ind in this.sums) {
      if (this.sums[ind] > max) {
        this.maximum = [];
        max = this.sums[ind];
      }
      if (this.sums[ind] === max) {
        let indNum = parseInt(ind, 10);
        this.maximum.push(indNum);
      }
    }
  }

  private showMaximums() {
    this.determineMaximums();
    this.showSums();
  }

  private showSums() {
    for(let i=0;i<5;i++) {
      this.rowHeaders[i] = this.sums[i].toString();
    }
    for(let j=0;j<5;j++) {
      this.columnHeaders[j] = this.sums[j+5].toString();
    }
  }

  selectSolution(headerId:number):void {
    this.lastClicked = headerId;
    this.showMaximums();

    if(this.maximum.indexOf(headerId) !== -1) {
      this.right++;
    } else {
      this.wrong++;
    }
  }

  clear():void {
    this.lastClicked = -1;
    this.resetAll();
  }

  getRightWrong():({right: number, wrong: number}) {
    return {right: this.right, wrong: this.wrong};
  }

  getTable():number[][] {
    return this.table;
  }

  getMaximum() {
    return this.maximum;
  }

  getColumnHeaders() {
    return this.columnHeaders;
  }

  getRowHeaders() {
    return this.rowHeaders;
  }
}
