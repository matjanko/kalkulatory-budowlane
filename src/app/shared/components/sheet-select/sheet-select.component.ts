import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sheet-select',
  templateUrl: './sheet-select.component.html',
  styleUrls: ['./sheet-select.component.less']
})
export class SheetSelectComponent implements OnInit {

  @Input() items: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
