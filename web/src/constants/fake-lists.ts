import { List } from "../interfaces";

export const FAKE_LISTS: { [key: string]: List } = {
  '1': {
    id: '1',
    name: 'Grocery List',
    items: {},
    icon: 'shopping_cart'
  },
  '2': {
    id: '2',
    name: 'Home Improvement',
    items: {},
    icon: 'home'
  },
  '3': {
    id: '3',
    name: 'Daily To-Do',
    items: {},
    icon: 'checklist'
  }
}
