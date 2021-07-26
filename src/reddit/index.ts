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

export function createRedditPosts({
  title,
  content,
  canonicalUrl,
}: {
  title: string
  content: string
  canonicalUrl: string
}) {
  const subreddits = [
    'webdev',
    'learnjavascript',
    'typescript',
    'programming',
    'webdevtutorials',
    'node',
  ]
  subreddits.forEach(subreddit => postLink(title, canonicalUrl, subreddit))
}
