// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

//micro-cms
export default function handler(req, res) {
  const { name } = req.query;
  res.end(`Hello ${name}!`);
}