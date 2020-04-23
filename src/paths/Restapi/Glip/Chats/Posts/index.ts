import { GlipPostsList, ReadGlipPostsParameters, GlipPostInfo, GlipPostPostBody, GlipPatchPostBody } from '../../../../../definitions'
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
   * Operation: Get Posts
   * Http get /restapi/v1.0/glip/chats/{chatId}/posts
   */
  async list (queryParams?: ReadGlipPostsParameters): Promise<GlipPostsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Post
   * Http post /restapi/v1.0/glip/chats/{chatId}/posts
   */
  async post (glipPostPostBody: GlipPostPostBody): Promise<GlipPostInfo> {
    return this.rc.post(this.path(false), glipPostPostBody)
  }

  /**
   * Operation: Get Post
   * Http get /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async get (): Promise<GlipPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Post
   * Http patch /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async patch (glipPatchPostBody: GlipPatchPostBody): Promise<GlipPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.')
    }

    return this.rc.patch(this.path(), glipPatchPostBody)
  }

  /**
   * Operation: Delete Post
   * Http delete /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async delete (): Promise<string> {
    if (this.postId === null) {
      throw new Error('postId must be specified.')
    }

    return this.rc.delete(this.path())
  }
}

export default Posts
