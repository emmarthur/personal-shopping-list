import type { NewItemPayload, ShoppingList, ShoppingListItem } from "@/types";

const seedLists: ShoppingList[] = [
  { id: 1, title: "Daily groceries" },
  { id: 2, title: "Birthday youngest child" },
];

const seedItems: ShoppingListItem[] = [
  { id: 1, listId: 1, title: "Washing pods", quantity: 1, price: 6.99 },
  { id: 2, listId: 1, title: "Rice", quantity: 1, price: 0.99 },
  { id: 3, listId: 2, title: "Birthday Cake", quantity: 1, price: 8.99 },
];

let lists: ShoppingList[] = [...seedLists];
let items: ShoppingListItem[] = [...seedItems];

export function getLists(): ShoppingList[] {
  return lists;
}

export function getList(listId: number): ShoppingList | undefined {
  return lists.find((list) => list.id === listId);
}

export function getItemsForList(listId: number): ShoppingListItem[] {
  return items.filter((item) => item.listId === listId);
}

export function addItem(payload: NewItemPayload & { id?: number }): ShoppingListItem {
  const id = payload.id ?? Math.floor(Math.random() * 100_000) + 1000;
  const item: ShoppingListItem = {
    id,
    listId: payload.listId,
    title: payload.title,
    quantity: payload.quantity,
    price: payload.price,
  };
  items = [...items, item];
  return item;
}
