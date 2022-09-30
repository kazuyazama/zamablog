
const { client } = require('../../libs/client');

export default async function getSearchBlog(req, res) {

  const keyword = req.query.keyword;
  const response = await client.get({
    endpoint: 'blog',
    queries: { 
        q: decodeURI(keyword)
     },
  })
  return res.status(200).json(response)
}