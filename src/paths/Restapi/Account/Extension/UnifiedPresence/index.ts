import UpdateUnifiedPresence from '../../../../../definitions/UpdateUnifiedPresence'
import UnifiedPresence from '../../../../../definitions/UnifiedPresence'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
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
  async patch(UpdateUnifiedPresence updateUnifiedPresence): Promise<UnifiedPresence> {
    return this.rc.patch(this.path(), updateUnifiedPresence)
  }
}

export default Index
