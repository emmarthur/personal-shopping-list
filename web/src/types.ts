export type ShoppingList = {
  id: number;
  title: string;
};

export type ShoppingListItem = {
  id: number;
  listId: number;
  title: string;
  quantity: number;
  price: number;
};

export type NewItemPayload = {
  listId: number;
  title: string;
  quantity: number;
  price: number;
};
