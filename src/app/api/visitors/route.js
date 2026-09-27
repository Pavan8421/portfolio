import { NextResponse } from "next/server";

function extractCount(payload) {
  if (payload == null) return null;
  if (typeof payload.count === "number") return payload.count;
  if (typeof payload.value === "number") return payload.value;
  if (payload.data && typeof payload.data.count === "number") {
    return payload.data.count;
  }
  if (payload.data && typeof payload.data.value === "number") {
    return payload.data.value;
  }
  if (payload.data && typeof payload.data.up_count === "number") {
    return payload.data.up_count;
  }
  return null;
}

export async function GET() {
  const apiKey = process.env.COUNTER_API_KEY;
  const workspace = process.env.COUNTER_WORKSPACE;
  const counterName = process.env.COUNTER_NAME || "visits";

  if (!apiKey || !workspace) {
    return NextResponse.json({ count: null });
  }

  try {
    const res = await fetch(
      `https://api.counterapi.dev/v2/${encodeURIComponent(workspace)}/${encodeURIComponent(counterName)}/up`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return NextResponse.json({ count: null });
    }

    const data = await res.json();
    return NextResponse.json({ count: extractCount(data) });
  } catch {
    return NextResponse.json({ count: null });
  }
}
