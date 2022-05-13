import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-dame',
  templateUrl: './table-dame.component.html',
  styleUrls: ['./table-dame.component.sass'],
})
export class TableDameComponent implements OnInit {
  @Input() dame: number;
  constructor() {
    this.dame = 0;
  }

  ngOnInit(): void {}
}
