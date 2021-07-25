const axios = require('axios')

export function createDevToPost(grayMatter) {
  const url: string = 'https://dev.to/api/articles'
  const data: object = {
    article: {
      title: grayMatter.title,
      published: true,
      body_markdown: grayMatter.content,
      tags: grayMatter.tags,
      canonicalUrl: grayMatter.canonicalUrl,
    },
  }
  const config: object = { headers: { 'api-key': process.env.DEV_TO_TOKEN } }
  axios
    .post(url, data, config)
    .then((res: any) => console.log(res.status))
    .catch((error: string) => console.log(error))
}
