export interface Item {
  id: string;
  text: string;
  completed: boolean;
  dateAdded: Date;
  type: 'item' | 'header';
  dateScheduled?: Date;
  dateCompleted?: Date;
  store?: string;
}
