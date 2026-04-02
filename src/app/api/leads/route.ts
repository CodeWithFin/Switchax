import { NextResponse } from 'next/server';
import { db } from '@/db';
import { leads } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, company } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newLead = await db.insert(leads).values({
      name,
      email,
      message,
      company,
    }).returning();

    return NextResponse.json({ success: true, lead: newLead[0] });
  } catch (error) {
    console.error("Failed to capture lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
