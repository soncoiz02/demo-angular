import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.sass'],
})
export class TableAvatarComponent implements OnInit {
  @Input() avatar: string;
  @Input() price: number;
  constructor() {
    this.avatar = '';
    this.price = 0;
  }

  ngOnInit(): void {}
}
