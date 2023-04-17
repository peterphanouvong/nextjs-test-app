import { getUserOrganizations } from "@kinde-oss/kinde-auth-nextjs";

export default function handler(req, res) {
  const organizations = getUserOrganizations(req, res);
  console.log(organizations);
  res.status(200).json({ organizations });
}
