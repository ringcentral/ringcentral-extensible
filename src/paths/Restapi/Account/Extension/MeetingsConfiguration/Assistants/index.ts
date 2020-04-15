import AssistantsResource from '../../../../../../definitions/AssistantsResource'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/assistants`
  }

  /**
   * Operation: Get Assistants
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants
   */
  async get(): Promise<AssistantsResource> {
    return this.rc.get(this.path())
  }
}

export default Index
