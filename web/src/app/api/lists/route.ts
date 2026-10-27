import { NextResponse } from "next/server";

import { getLists } from "@/lib/store";

export async function GET() {
  return NextResponse.json(getLists());
}
