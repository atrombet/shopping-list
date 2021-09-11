import { List } from "../interfaces";

export const FAKE_LISTS: { [key: string]: List } = {
  '1': {
    id: '1',
    name: 'Grocery List',
    items: {
      '1': { id: '1', text: 'Bananas', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '2': { id: '2', text: 'Apples', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '3': { id: '3', text: 'Green peppers', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '4': { id: '4', text: 'Yellow onions x2', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '5': { id: '5', text: 'Dairy', completed: false, dateAdded: new Date(2020, 10, 11), type: 'header' },
      '6': { id: '6', text: 'Milk 2%', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '7': { id: '7', text: 'Sour cream', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '8': { id: '8', text: 'Mexican cheese blend', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
      '9': { id: '9', text: 'Eggs', completed: false, dateAdded: new Date(2020, 10, 11), type: 'item' },
    },
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
