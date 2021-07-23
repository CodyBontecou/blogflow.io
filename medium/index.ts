const axios = require('axios')

export function createMediumPost(
  canonicalUrl: string,
  title: string,
  content: any,
  tags: string[]
) {
  const url: string = `https://api.medium.com/v1/users/${process.env.MEDIUM_ID}/posts`
  const data: object = {
    title: title,
    contentFormat: 'markdown',
    content: content,
    canonicalUrl: canonicalUrl,
    tags: tags,
    publishStatus: 'public',
  }
  const config: object = {
    headers: {
      Authorization: `Bearer ${process.env.MEDIUM_TOKEN}`,
    },
  }
  axios
    .post(url, data, config)
    .then((res: any) => console.log(res.status))
    .catch((error: string) => console.log(error))
}
