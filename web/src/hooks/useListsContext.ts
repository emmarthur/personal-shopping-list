"use client";

import { useContext } from "react";

import { ListsContext } from "@/context/ListsContext";

export function useListsContext() {
  const value = useContext(ListsContext);
  if (!value) {
    throw new Error("useListsContext must be used within ListsContextProvider");
  }
  return value;
}
