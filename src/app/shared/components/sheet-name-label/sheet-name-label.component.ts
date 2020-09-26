import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sheet-name-label',
  templateUrl: './sheet-name-label.component.html',
  styleUrls: ['./sheet-name-label.component.less']
})
export class SheetNameLabelComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
