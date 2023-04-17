import { getOrganization } from "@kinde-oss/kinde-auth-nextjs";

export default function handler(req, res) {
  const organization = getOrganization(req, res);
  res.status(200).json({ organization });
}
