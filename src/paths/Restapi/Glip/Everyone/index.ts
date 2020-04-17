import { GlipEveryoneInfo, UpdateGlipEveryoneRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Everyone {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/everyone`
  }

  /**
   * Operation: Get Everyone Chat
   * Http get /restapi/v1.0/glip/everyone
   */
  async get(): Promise<GlipEveryoneInfo> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Everyone Сhat
   * Http patch /restapi/v1.0/glip/everyone
   */
  async patch(updateGlipEveryoneRequest: UpdateGlipEveryoneRequest): Promise<GlipEveryoneInfo> {
    return this.rc.patch(this.path(), updateGlipEveryoneRequest)
  }
}

export default Everyone
