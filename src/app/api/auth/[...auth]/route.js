import { NetlifyCmsOauthProvider } from "netlify-cms-oauth-provider-node";

const provider = new NetlifyCmsOauthProvider({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export async function GET(req) {
  return provider.handle(req);
}

export async function POST(req) {
  return provider.handle(req);
}
