import { ApiPath } from "@/app/constant";
import { NextRequest } from "next/server";
import { handle as deepseekHandler } from "../../deepseek";

async function handle(
  req: NextRequest,
  { params }: { params: { provider: string; path: string[] } },
) {
  const apiPath = `/api/${params.provider}`;
  console.log(`[${params.provider} Route] params `, params);

  // Only handle the DeepSeek case
  if (apiPath === ApiPath.DeepSeek) {
    return deepseekHandler(req, { params });
  } else {
    // Optionally handle unsupported requests
    return new Response("Provider not supported", { status: 404 });
  }
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
export const preferredRegion = [
  "arn1",
  "bom1",
  "cdg1",
  "cle1",
  "cpt1",
  "dub1",
  "fra1",
  "gru1",
  "hnd1",
  "iad1",
  "icn1",
  "kix1",
  "lhr1",
  "pdx1",
  "sfo1",
  "sin1",
  "syd1",
];
