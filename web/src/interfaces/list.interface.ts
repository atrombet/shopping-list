import { Item } from './item.interface';

export interface List {
  id: string;
  name: string;
  type?: string;
  items: { [key: string]: Item };
  icon: string;
  note?: string;
}
