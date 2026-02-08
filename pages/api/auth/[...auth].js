import { NetlifyCmsOauthProvider } from "netlify-cms-oauth-provider-node";

const provider = new NetlifyCmsOauthProvider({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export default function handler(req, res) {
  provider.handle(req, res);
}
