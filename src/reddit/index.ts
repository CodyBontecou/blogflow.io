const snoowrap = require('snoowrap')

export const config = {
  username: process.env.username,
  password: process.env.password,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
}

export function postLink(title: string, link: string, subreddit: string) {
  const r = new snoowrap({
    userAgent: 'Whatever',
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    username: config.username,
    password: config.password,
  })
  r.getSubreddit(subreddit).submitLink({
    title: title,
    url: link,
    sendReplies: true,
  })
}

export const url =
  'https://codybontecou.com/mocking-api-with-msw-and-typescript.html'
export const title =
  'Mocking an API request with Mock Service Worker and Typescript'
export const subreddits = [
  'webdev',
  'learnjavascript',
  'typescript',
  'programming',
  'webdevtutorials',
  'node',
]

// subreddits.forEach(subreddit => postLink(title, url, subreddit))
