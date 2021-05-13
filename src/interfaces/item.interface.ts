export interface Item {
  id: string;
  text: string;
  completed: boolean;
  dateAdded: Date;
  dateScheduled?: Date;
  dateCompleted?: Date;
  itemType?: string;
  store?: string;
}
