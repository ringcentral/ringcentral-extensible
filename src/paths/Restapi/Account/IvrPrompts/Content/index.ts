import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/content`
  }

  /**
   * Operation: Get IVR Prompt Content
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content
   */
  async get(): Promise<Buffer> {
    return this.rc.get(this.path())
  }
}

export default Index
