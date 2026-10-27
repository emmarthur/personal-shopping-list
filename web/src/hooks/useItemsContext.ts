"use client";

import { useContext } from "react";

import { ItemsContext } from "@/context/ItemsContext";

export function useItemsContext() {
  const value = useContext(ItemsContext);
  if (!value) {
    throw new Error("useItemsContext must be used within ItemsContextProvider");
  }
  return value;
}
