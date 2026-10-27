"use client";

import type { ReactNode } from "react";

import { ItemsContextProvider } from "@/context/ItemsContext";
import { ListsContextProvider } from "@/context/ListsContext";

export default function AppContext({ children }: { children: ReactNode }) {
  return (
    <ListsContextProvider>
      <ItemsContextProvider>{children}</ItemsContextProvider>
    </ListsContextProvider>
  );
}
