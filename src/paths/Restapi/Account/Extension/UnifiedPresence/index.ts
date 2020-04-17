import UpdateUnifiedPresence from '../../../../../definitions/UpdateUnifiedPresence'
import Parent from '..'
import RestClient from '../../../../..'

class UnifiedPresence {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/unified-presence`
  }

  /**
   * Operation: Get Unified Presence
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence
   */
  async get(): Promise<UnifiedPresence> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Unified Presence
   * Http patch /restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence
   */
  async patch(updateUnifiedPresence: UpdateUnifiedPresence): Promise<UnifiedPresence> {
    return this.rc.patch(this.path(), updateUnifiedPresence)
  }
}

export default UnifiedPresence
