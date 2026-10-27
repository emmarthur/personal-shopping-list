import { NextResponse } from "next/server";

import { addItem } from "@/lib/store";
import type { NewItemPayload } from "@/types";

export async function POST(request: Request) {
  const body = (await request.json()) as NewItemPayload & { id?: number };
  const { listId, title, quantity, price } = body;

  if (!listId || !title?.trim()) {
    return NextResponse.json({ detail: "Missing list or title." }, { status: 400 });
  }
  if (!Number.isFinite(Number(quantity)) || !Number.isFinite(Number(price))) {
    return NextResponse.json({ detail: "Quantity and price must be numbers." }, { status: 400 });
  }

  const item = addItem({
    listId: Number(listId),
    title: title.trim(),
    quantity: Number(quantity),
    price: Number(price),
    id: body.id,
  });

  return NextResponse.json(item);
}
