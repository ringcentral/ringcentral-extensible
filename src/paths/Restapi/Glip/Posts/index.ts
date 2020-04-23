import { GlipPosts, ListGlipPostsParameters, GlipPostInfo, GlipCreatePost } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Posts {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/posts`
  }

  /**
   * Operation: Get Posts
   * Http get /restapi/v1.0/glip/posts
   */
  async get (queryParams?: ListGlipPostsParameters): Promise<GlipPosts> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Create Post
   * Http post /restapi/v1.0/glip/posts
   */
  async post (glipCreatePost: GlipCreatePost): Promise<GlipPostInfo> {
    return this.rc.post(this.path(), glipCreatePost)
  }
}

export default Posts
