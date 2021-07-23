require('dotenv').config()
const axios = require('axios')
import { canonicalUrl, title, content } from './mdParser'
import { createDevToPost } from './devto/index'
import { createMediumPost } from './medium/index'
import { createHashnodePost } from './hashnode/index'

axios.defaults.headers.common['content-type'] = 'application/json'

createDevToPost(canonicalUrl, title, content, [])
createMediumPost(canonicalUrl, title, content, [])
createHashnodePost(canonicalUrl, title, content, [])
