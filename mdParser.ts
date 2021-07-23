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

const grayMatter = matter(readFile('./file.md'))

const canonicalUrl = grayMatter.data.canonicalUrl
const title = grayMatter.data.title
const content = grayMatter.content

export { canonicalUrl, title, content }
