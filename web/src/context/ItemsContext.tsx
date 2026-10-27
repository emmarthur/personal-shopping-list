"use client";

import {
  createContext,
  useCallback,
  useReducer,
  type ReactNode,
} from "react";

import { itemsUrl, listItemsUrl } from "@/config/api";
import type { NewItemPayload, ShoppingListItem } from "@/types";

type ItemsState = {
  items: ShoppingListItem[];
  loading: boolean;
  error: string;
};

type ItemsAction =
  | { type: "GET_ITEMS_SUCCESS"; payload: ShoppingListItem[] }
  | { type: "GET_ITEMS_ERROR"; payload: string }
  | { type: "ADD_ITEM_SUCCESS"; payload: ShoppingListItem }
  | { type: "FETCH_ITEMS_START" };

const initialState: ItemsState = {
  items: [],
  loading: true,
  error: "",
};

function reducer(state: ItemsState, action: ItemsAction): ItemsState {
  switch (action.type) {
    case "FETCH_ITEMS_START":
      return { ...state, loading: true, error: "" };
    case "GET_ITEMS_SUCCESS":
      return { ...state, items: action.payload, loading: false, error: "" };
    case "GET_ITEMS_ERROR":
      return { ...state, items: [], loading: false, error: action.payload };
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}

export type ItemsContextValue = ItemsState & {
  fetchItems: (listId: number | string) => Promise<void>;
  addItem: (payload: NewItemPayload) => Promise<void>;
};

export const ItemsContext = createContext<ItemsContextValue | null>(null);

export function ItemsContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = useCallback(async (listId: number | string) => {
    dispatch({ type: "FETCH_ITEMS_START" });
    try {
      const response = await fetch(listItemsUrl(listId));
      if (!response.ok) throw new Error("Could not load items.");
      const result = (await response.json()) as ShoppingListItem[];
      dispatch({ type: "GET_ITEMS_SUCCESS", payload: result });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Could not load items.";
      dispatch({ type: "GET_ITEMS_ERROR", payload: message });
    }
  }, []);

  const addItem = useCallback(async (payload: NewItemPayload) => {
    const itemId = Math.floor(Math.random() * 100);
    try {
      const response = await fetch(itemsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, id: itemId }),
      });
      if (!response.ok) throw new Error("Could not add item.");
      const result = (await response.json()) as ShoppingListItem;
      dispatch({ type: "ADD_ITEM_SUCCESS", payload: result });
    } catch {
      dispatch({
        type: "ADD_ITEM_SUCCESS",
        payload: { id: itemId, ...payload },
      });
    }
  }, []);

  return (
    <ItemsContext.Provider value={{ ...state, fetchItems, addItem }}>
      {children}
    </ItemsContext.Provider>
  );
}
