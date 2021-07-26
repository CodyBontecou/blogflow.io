const axios = require('axios')

interface mediumPost {
  title: string
  contentFormat: string
  content: string
  canonicalUrl: string
  tags: string[]
  publishStatus: string
}

export async function createMediumPost({
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
  const url: string = `https://api.medium.com/v1/users/${process.env.MEDIUM_ID}/posts`
  const data: mediumPost = {
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
  const body = await axios
    .post(url, data, config)
    .then((res: any) => {
      return res
    })
    .catch((error: string) => console.log(error))
  return body
}
