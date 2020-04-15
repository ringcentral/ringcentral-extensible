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
    return `${this.parent.path()}/activate`
  }

  /**
   * Operation: Activate Webhook
   * Http post /restapi/v1.0/glip/webhooks/{webhookId}/activate
   */
  async post(): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Index
