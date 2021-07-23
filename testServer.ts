import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.post('https://dev.to/api/articles', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        article: {
          title: 'Hello, World!',
          published: true,
          body_markdown: 'Hello DEV, this is my first post',
          tags: ['discuss', 'help'],
          series: 'Hello series',
        },
      })
    )
  })
)
