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
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/posts
   */
  async get (queryParams?: ListGlipPostsParameters): Promise<GlipPosts> {
    const r = await this.rc.get(this.path(), queryParams)
    return r.data
  }

  /**
   * Operation: Create Post
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/glip/posts
   */
  async post (glipCreatePost: GlipCreatePost): Promise<GlipPostInfo> {
    const r = await this.rc.post(this.path(), glipCreatePost)
    return r.data
  }
}

export default Posts
