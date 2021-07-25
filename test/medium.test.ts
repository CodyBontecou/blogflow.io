import { createMediumPost } from '../src/medium/index'
import { grayMatter } from '../src/mdParser'

it('Posts to dev.to articles', async () => {
  const response = await createMediumPost(grayMatter)
  expect(response.status).toEqual(201)
})
