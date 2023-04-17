import { getPermissions } from "@kinde-oss/kinde-auth-nextjs";

export default function handler(req, res) {
  const permissions = getPermissions(req, res);
  res.status(200).json({ permissions });
}
