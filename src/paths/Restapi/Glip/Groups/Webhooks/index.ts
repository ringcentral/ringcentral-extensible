import { GlipWebhookInfo, GlipWebhookList } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Webhooks {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/webhooks`
  }

  /**
   * Operation: Create Webhook in Group
   * Http post /restapi/v1.0/glip/groups/{groupId}/webhooks
   */
  async post (): Promise<GlipWebhookInfo> {
    return this.rc.post(this.path())
  }

  /**
   * Operation: Get Webhooks in Group
   * Http get /restapi/v1.0/glip/groups/{groupId}/webhooks
   */
  async get (): Promise<GlipWebhookList> {
    return this.rc.get(this.path())
  }
}

export default Webhooks
