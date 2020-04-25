import { GlipCompleteTask } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Complete {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/complete`
  }

  /**
   * Operation: Complete Task
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/tasks/{taskId}/complete
   */
  async post (glipCompleteTask: GlipCompleteTask): Promise<string> {
    return this.rc.post(this.path(), glipCompleteTask)
  }
}

export default Complete
