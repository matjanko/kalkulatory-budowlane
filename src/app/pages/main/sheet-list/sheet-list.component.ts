import { Component, Input, OnInit } from '@angular/core';
import { Sheet } from '../../../shared/models/sheet-list/sheet';

@Component({
  selector: 'app-sheet-list',
  templateUrl: './sheet-list.component.html',
  styleUrls: ['./sheet-list.component.less']
})
export class SheetListComponent implements OnInit {

  @Input() sheets: Array<Sheet>;

  constructor() { }

  ngOnInit(): void {

  }

}
