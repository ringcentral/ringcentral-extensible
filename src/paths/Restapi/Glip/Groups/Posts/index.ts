import Text from './Text'
import { GlipPosts, ListGlipGroupPostsParameters, GlipPostInfo, GlipCreatePost } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Posts {
  rc: RestClient
  postId: (string | null)
  parent: Parent

  constructor (parent: Parent, postId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.postId = postId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.postId !== null) {
      return `${this.parent.path()}/posts/${this.postId}`
    }

    return `${this.parent.path()}/posts`
  }

  /**
   * Operation: Get Group Posts
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/groups/{groupId}/posts
   */
  async get (queryParams?: ListGlipGroupPostsParameters): Promise<GlipPosts> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Post in Group
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/posts
   */
  async post (glipCreatePost: GlipCreatePost): Promise<GlipPostInfo> {
    return this.rc.post(this.path(false), glipCreatePost)
  }

  text (): Text {
    return new Text(this)
  }
}

export default Posts
