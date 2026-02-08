export const runtime = "nodejs";

// 👇 force CommonJS require
const OAuthProvider = require("netlify-cms-oauth-provider-node");

const provider = OAuthProvider({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export async function GET(req) {
  return provider.handle(req);
}

export async function POST(req) {
  return provider.handle(req);
}
