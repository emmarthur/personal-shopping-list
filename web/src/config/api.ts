/** Local API (same shapes as the book's My JSON Server routes). */
export const listsUrl = "/api/lists";
export const listUrl = (listId: number | string) => `/api/lists/${listId}`;
export const listItemsUrl = (listId: number | string) => `/api/lists/${listId}/items`;
export const itemsUrl = "/api/items";
