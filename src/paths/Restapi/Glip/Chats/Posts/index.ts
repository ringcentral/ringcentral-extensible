import GlipPatchPostBody from '../../../../../definitions/GlipPatchPostBody'
import GlipPostPostBody from '../../../../../definitions/GlipPostPostBody'
import GlipPostInfo from '../../../../../definitions/GlipPostInfo'
import GlipPostsList from '../../../../../definitions/GlipPostsList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  postId: string
  parent: Parent

  constructor(parent: Parent, postId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.postId = postId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.postId != null) {
      return `${this.parent.path()}/posts/${this.postId}`
    }

    return `${this.parent.path()}/posts`
  }

  /**
   * Operation: Get Posts
   * Http get /restapi/v1.0/glip/chats/{chatId}/posts
   */
  async list(ReadGlipPostsParameters queryParams = null): Promise<GlipPostsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Post
   * Http post /restapi/v1.0/glip/chats/{chatId}/posts
   */
  async post(GlipPostPostBody glipPostPostBody): Promise<GlipPostInfo> {
    return this.rc.post(this.path(false), glipPostPostBody)
  }

  /**
   * Operation: Get Post
   * Http get /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async get(): Promise<GlipPostInfo> {
    if (!this.postId || this.postId === null) {
      throw new Error("postId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Post
   * Http patch /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async patch(GlipPatchPostBody glipPatchPostBody): Promise<GlipPostInfo> {
    if (!this.postId || this.postId === null) {
      throw new Error("postId must not be undefined or null")
    }

    return this.rc.patch(this.path(), glipPatchPostBody)
  }

  /**
   * Operation: Delete Post
   * Http delete /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async delete(): Promise<string> {
    if (!this.postId || this.postId === null) {
      throw new Error("postId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
