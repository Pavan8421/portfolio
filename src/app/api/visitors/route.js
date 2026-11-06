import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function asCount(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function extractCount(payload) {
  if (payload == null) return null;

  const candidates = [
    payload.count,
    payload.value,
    payload.up_count,
    payload.data?.count,
    payload.data?.value,
    payload.data?.up_count,
    payload.data?.counter?.count,
    payload.data?.counter?.value,
    payload.data?.counter?.up_count,
  ];

  for (const candidate of candidates) {
    const count = asCount(candidate);
    if (count !== null) return count;
  }

  return null;
}

function jsonCount(count) {
  return NextResponse.json(
    { count },
    { headers: { "Cache-Control": "no-store" } },
  );
}

async function fetchCounter(increment) {
  const apiKey = process.env.COUNTER_API_KEY;
  const workspace = process.env.COUNTER_WORKSPACE;
  const counterName = process.env.COUNTER_NAME || "visits";

  if (!apiKey || !workspace) {
    return jsonCount(null);
  }

  try {
    const suffix = increment ? "/up" : "";
    const res = await fetch(
      `https://api.counterapi.dev/v2/${encodeURIComponent(workspace)}/${encodeURIComponent(counterName)}${suffix}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return jsonCount(null);
    }

    const data = await res.json();
    return jsonCount(extractCount(data));
  } catch {
    return jsonCount(null);
  }
}

export function GET() {
  return fetchCounter(false);
}

export function POST() {
  return fetchCounter(true);
}
