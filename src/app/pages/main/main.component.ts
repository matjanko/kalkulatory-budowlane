import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sheet } from '../../shared/models/sheet-list/sheet';
import { SheetService } from '../../shared/services/sheet.service';
import { ActivatedRoute, ActivationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit, OnDestroy {

  sheets = new Array<Sheet>();
  sheetTitle: string;

  private subscription = new Subscription();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sheetService: SheetService
  ) {}

  ngOnInit(): void {
    this.sheets = this.sheetService.getSheets();
    this.sheetTitle = this.activatedRoute.firstChild?.snapshot?.data?.title;

    this.subscription.add(this.router.events.pipe(
      filter(event => event instanceof ActivationEnd && event.snapshot?.data?.title),
      map((event: ActivationEnd) => event.snapshot.data.title)
    ).subscribe(title => {
      this.sheetTitle = title;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
