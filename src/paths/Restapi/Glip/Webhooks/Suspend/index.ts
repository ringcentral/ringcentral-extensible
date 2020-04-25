import Parent from '..'
import RestClient from '../../../../..'

class Suspend {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/suspend`
  }

  /**
   * Operation: Suspend Webhook
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/webhooks/{webhookId}/suspend
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Suspend
