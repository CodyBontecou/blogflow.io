const axios = require('axios')

export function createHashnodePost(
  canonicalUrl: string,
  title: string,
  content: any,
  tags: string[]
) {
  const url: string = 'https://api.hashnode.com'
  const data: any = JSON.stringify({
    query:
      'mutation createStory($input: CreateStoryInput!){ createStory(input: $input){ code success message } }',
    variables: {
      input: {
        title: title,
        contentMarkdown: content,
        isRepublished: { originalArticleURL: canonicalUrl },
        tags: tags,
      },
    },
  })
  const config: object = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.HASHNODE_TOKEN,
    },
  }

  axios
    .post(url, data, config)
    .then((res: any) => console.log(res.status))
    .catch((error: any) => console.log(error))
}

// function updateHashnodePost({ canonicalUrl, title, content }) {
//   axios('https://api.hashnode.com', {
//     method: 'POST',
//     headers: {
//       Authorization: process.env.HASHNODE_TOKEN,
//     },
//     body: JSON.stringify({
//       query:
//         'mutation updateStory($postId: String!, $input: UpdateStoryInput!){ updateStory(postId: $postId, input: $input){ code success message } }',
//       variables: {
//         postId: '60eddc7cfc37a15ec1568dbd',
//         input: {
//           title: title,
//           contentMarkdown: content,
//           isPartOfPublication: { publicationId: '60e8029c8aaa3f019846be0a' },
//           isRepublished: { originalArticleURL: canonicalUrl },
//           tags: [
//             {
//               _id: '56744721958ef13879b94c7e',
//               name: 'General Programming',
//               slug: 'programming',
//             },
//           ],
//         },
//       },
//     }),
//   }).then((res: object) => console.log(res))
// }
