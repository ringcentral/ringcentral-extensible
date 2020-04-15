import ReadMessageContentParameters from '../../../../../../definitions/ReadMessageContentParameters'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  attachmentId: string
  parent: Parent

  constructor(parent: Parent, attachmentId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.attachmentId = attachmentId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.attachmentId !== null) {
      return `${this.parent.path()}/content/${this.attachmentId}`
    }

    return `${this.parent.path()}/content`
  }

  /**
   * Operation: Get Message Content
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}
   */
  async get(queryParams?: ReadMessageContentParameters): Promise<Buffer> {
    if (this.attachmentId === undefined || this.attachmentId === null) {
      throw new Error("attachmentId must not be undefined or null")
    }

    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
