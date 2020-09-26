import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sheet-groupbox',
  templateUrl: './sheet-groupbox.component.html',
  styleUrls: ['./sheet-groupbox.component.less']
})
export class SheetGroupboxComponent implements OnInit {

  @Input() header: string;
  @Input() width: number | string = 'auto';

  constructor() { }

  ngOnInit(): void {
  }

}
