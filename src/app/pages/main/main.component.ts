import {Component, OnDestroy, OnInit} from '@angular/core';
import { Sheet } from '../../shared/models/sheet-list/sheet';
import { SheetService } from '../../shared/services/sheet.service';
import { NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit, OnDestroy {

  sheets = new Array<Sheet>();
  selectedSheet: Sheet;

  private subscription = new Subscription();

  constructor(
    private router: Router,
    private sheetService: SheetService
  ) {}

  ngOnInit(): void {
    this.sheets = this.sheetService.getSheets();
    this.selectedSheet = this.getSheetByPath(this.router.url);

    this.subscription.add(this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe(event => {
      this.selectedSheet = this.getSheetByPath(event.url);
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getSheetByPath(path: string): Sheet {
    return this.sheets.find(s => s.path === path);
  }
}
