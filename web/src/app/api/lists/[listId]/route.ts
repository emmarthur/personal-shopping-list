import { NextResponse } from "next/server";

import { getList } from "@/lib/store";

type Params = { params: { listId: string } };

export async function GET(_request: Request, { params }: Params) {
  const listId = Number(params.listId);
  if (!Number.isFinite(listId)) {
    return NextResponse.json({ detail: "Invalid list id." }, { status: 400 });
  }
  const list = getList(listId);
  if (!list) {
    return NextResponse.json({ detail: "List not found." }, { status: 404 });
  }
  return NextResponse.json(list);
}
