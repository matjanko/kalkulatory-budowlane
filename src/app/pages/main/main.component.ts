import { Component, OnInit } from '@angular/core';
import { Sheet } from '../../shared/models/sheet-list/sheet';
import { SheetService } from '../../shared/services/sheet.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {

  sheetName: string;
  sheets = new Array<Sheet>();

  constructor(private sheetService: SheetService) {}

  ngOnInit(): void {
    this.sheets = this.sheetService.getSheets();
  }
}
