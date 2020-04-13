import CreateMessageStoreReportRequest from '../../../../definitions/CreateMessageStoreReportRequest'
import MessageStoreReport from '../../../../definitions/MessageStoreReport'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  taskId: string
  parent: Parent

  constructor(parent: Parent, taskId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.taskId != null) {
      return `${this.parent.path()}/message-store-report/${this.taskId}`
    }

    return `${this.parent.path()}/message-store-report`
  }

  /**
   * Operation: Create Message Store Report
   * Http post /restapi/v1.0/account/{accountId}/message-store-report
   */
  async post(CreateMessageStoreReportRequest createMessageStoreReportRequest): Promise<MessageStoreReport> {
    return this.rc.post(this.path(false), createMessageStoreReportRequest)
  }

  /**
   * Operation: Get Message Store Report Task
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}
   */
  async get(): Promise<MessageStoreReport> {
    if (!this.taskId || this.taskId === null) {
      throw new Error("taskId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
