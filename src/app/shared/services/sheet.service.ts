import { Injectable } from '@angular/core';
import { SheetCategory } from '../models/sheet-list/sheet-category';
import { Sheet } from '../models/sheet-list/sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor() { }

  getCategories(): Array<SheetCategory> {
    return [
      { id: 1, name: 'Obciążenia' },
      { id: 2, name: 'Żelbet' }
    ] as Array<SheetCategory>;
  }

  getSheets(): Array<Sheet> {
    return [
      {
        id: 1,
        name: 'SnowLoadSheet',
        title: 'Obciążenie śniegiem',
        description: 'Kalkulator do wyznaczania obciążenia śniegiem',
        category: this.getCategories()[0],
        path: '/obciazenie-sniegiem'
      },
      {
        id: 2,
        name: 'ConcreteCoverSheet',
        title: 'Otulina w betonie',
        description: 'Kalkulator do wyznaczania minimalnej otuliny w elementach żelbetowych',
        category: this.getCategories()[1],
        path: '/otulina-w-betonie'
      }
    ] as Array<Sheet>;
  }
}
