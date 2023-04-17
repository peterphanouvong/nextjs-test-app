// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.cookies.kinde_token) {
    res.status(200).json(JSON.parse(req.cookies.kinde_token));
  } else {
    res.status(400).end();
  }
}
