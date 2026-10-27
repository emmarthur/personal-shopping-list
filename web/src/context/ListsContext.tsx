"use client";

import {
  createContext,
  useCallback,
  useReducer,
  type ReactNode,
} from "react";

import { listUrl, listsUrl } from "@/config/api";
import type { ShoppingList } from "@/types";

type ListsState = {
  lists: ShoppingList[];
  list: ShoppingList | Record<string, never>;
  loading: boolean;
  error: string;
};

type ListsAction =
  | { type: "GET_LISTS_SUCCESS"; payload: ShoppingList[] }
  | { type: "GET_LISTS_ERROR"; payload: string }
  | { type: "GET_LIST_SUCCESS"; payload: ShoppingList }
  | { type: "GET_LIST_ERROR"; payload: string }
  | { type: "RESET_LIST_DETAIL" };

const initialState: ListsState = {
  lists: [],
  list: {},
  loading: true,
  error: "",
};

function reducer(state: ListsState, action: ListsAction): ListsState {
  switch (action.type) {
    case "GET_LISTS_SUCCESS":
      return { ...state, lists: action.payload, loading: false, error: "" };
    case "GET_LISTS_ERROR":
      return { ...state, lists: [], loading: false, error: action.payload };
    case "GET_LIST_SUCCESS":
      return { ...state, list: action.payload, loading: false, error: "" };
    case "GET_LIST_ERROR":
      return { ...state, list: {}, loading: false, error: action.payload };
    case "RESET_LIST_DETAIL":
      return { ...state, list: {}, loading: true, error: "" };
    default:
      return state;
  }
}

export type ListsContextValue = ListsState & {
  fetchLists: () => Promise<void>;
  fetchList: (listId: number | string) => Promise<void>;
};

export const ListsContext = createContext<ListsContextValue | null>(null);

export function ListsContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchLists = useCallback(async () => {
    try {
      const response = await fetch(listsUrl);
      if (!response.ok) throw new Error("Could not load lists.");
      const result = (await response.json()) as ShoppingList[];
      dispatch({ type: "GET_LISTS_SUCCESS", payload: result });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Could not load lists.";
      dispatch({ type: "GET_LISTS_ERROR", payload: message });
    }
  }, []);

  const fetchList = useCallback(async (listId: number | string) => {
    dispatch({ type: "RESET_LIST_DETAIL" });
    try {
      const response = await fetch(listUrl(listId));
      if (!response.ok) throw new Error("Could not load list.");
      const result = (await response.json()) as ShoppingList;
      dispatch({ type: "GET_LIST_SUCCESS", payload: result });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Could not load list.";
      dispatch({ type: "GET_LIST_ERROR", payload: message });
    }
  }, []);

  return (
    <ListsContext.Provider value={{ ...state, fetchLists, fetchList }}>
      {children}
    </ListsContext.Provider>
  );
}
