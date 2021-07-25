import * as fs from 'fs'
const matter = require('gray-matter')

const readFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    return data
  } catch (err) {
    console.log(err)
  }
}

const data = matter(readFile(__dirname + '/file.md'))

export interface GrayMatter {
  canonicalUrl: string
  title: string
  content: string
  tags: string[]
}

const grayMatter: GrayMatter = {
  canonicalUrl: data.data.canonicalUrl,
  title: data.data.title,
  content: data.content,
  tags: data.data.tags,
}

export { grayMatter }
