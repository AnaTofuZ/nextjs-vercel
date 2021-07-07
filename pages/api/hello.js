// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

const handler = (_, res) => {
  const body = {message: "Hello"};
  res.statusCode = 200;
  res.json(body);
}

export default handler;