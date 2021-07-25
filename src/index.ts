require('dotenv').config()
const axios = require('axios')
import { grayMatter } from './mdParser'
import { createDevToPost } from './devto/index'
import { createMediumPost } from './medium/index'
import { createHashnodePost } from './hashnode/index'

axios.defaults.headers.common['content-type'] = 'application/json'

// createDevToPost(grayMatter)
createMediumPost(grayMatter)
// createHashnodePost(grayMatter)
