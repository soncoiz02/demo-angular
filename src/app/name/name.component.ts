import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.sass'],
})
export class NameComponent implements OnInit {
  @Input() name: string = '';
  constructor() {}

  ngOnInit(): void {}
}
