import {RestRequestConfig} from '../../../../Rest';
import {
  ReadAccountPresenceParameters,
  AccountPresenceInfo,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/presence`;
  }
  /**
   * Returns presence status of all extensions of an account. Please note: The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department, Announcement Only, Voicemail (Take Messages Only), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/presence
   * Rate Limit Group: Heavy
   * App Permission: ReadPresence
   * User Permission: ReadPresenceStatus
   */
  async get(
    queryParams?: ReadAccountPresenceParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<AccountPresenceInfo> {
    const r = await this.rc.get<AccountPresenceInfo>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
