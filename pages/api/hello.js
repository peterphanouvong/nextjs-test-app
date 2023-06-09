// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getIdToken } from "@kinde-oss/kinde-auth-nextjs";

export default function handler(req, res) {
  const token = getIdToken(req, res);
  console.log(token);
  res.status(200).json({ token });
}
