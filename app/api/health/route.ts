import { NextResponse } from "next/server";
import { prisma } from "@/server/db/client";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "ok", db: "connected" });
  } catch {
    return NextResponse.json({ status: "ok", db: "disconnected" }, { status: 503 });
  }
}
