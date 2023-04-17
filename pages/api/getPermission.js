import { getPermission } from "@kinde-oss/kinde-auth-nextjs";

export default function handler(req, res) {
  const { permission: x } = JSON.parse(req.body);
  const permission = getPermission(req, res, x);
  res.status(200).json({ permission });
}
