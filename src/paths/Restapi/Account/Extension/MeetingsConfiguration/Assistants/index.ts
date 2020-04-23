import { AssistantsResource } from '../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../..'

class Assistants {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/assistants`
  }

  /**
   * Operation: Get Assistants
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants
   */
  async get (): Promise<AssistantsResource> {
    return this.rc.get(this.path())
  }
}

export default Assistants
