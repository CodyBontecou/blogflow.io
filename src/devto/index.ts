const axios = require('axios')

export function createDevToPost({
  title,
  content,
  canonicalUrl,
  tags,
}: {
  title: string
  content: string
  canonicalUrl: string
  tags: string[]
}) {
  const url: string = 'https://dev.to/api/articles'
  const data: object = {
    article: {
      title: title,
      published: true,
      body_markdown: content,
      tags: tags,
      canonicalUrl: canonicalUrl,
    },
  }
  const config: object = { headers: { 'api-key': process.env.DEV_TO_TOKEN } }
  axios
    .post(url, data, config)
    .then((res: any) => console.log(res.status))
    .catch((error: string) => console.log(error))
}
