import { NextResponse } from "next/server";

import { getItemsForList } from "@/lib/store";

type Params = { params: { listId: string } };

export async function GET(_request: Request, { params }: Params) {
  const listId = Number(params.listId);
  if (!Number.isFinite(listId)) {
    return NextResponse.json({ detail: "Invalid list id." }, { status: 400 });
  }
  return NextResponse.json(getItemsForList(listId));
}
