import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const submission = await request.json();
  console.log("GILD application submission", submission);

  return NextResponse.json({ success: true });
}
