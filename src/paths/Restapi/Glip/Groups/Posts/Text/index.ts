import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/text`
  }

  /**
   * Operation: Update Post
   * Http put /restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text
   */
  async put(string body): Promise<string> {
    return this.rc.put(this.path(), body)
  }
}

export default Index
