import { SheetCategory } from './sheet-category';

export class Sheet {
  id: number;
  name: string;
  title: string;
  description: string;
  category: SheetCategory;
  path: string;
}
