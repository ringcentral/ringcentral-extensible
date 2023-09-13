import AccountPresenceInfo from '../../../../definitions/AccountPresenceInfo';
import ReadAccountPresenceParameters from '../../../../definitions/ReadAccountPresenceParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/presence`;
  }

  /**
   * Returns presence status of all extensions of an account. Please note: The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department, Announcement Only, Voicemail (Take Messages Only), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/presence
   * Rate Limit Group: Heavy
   * App Permission: ReadPresence
   * User Permission: ReadPresenceStatus
   */
  public async get(queryParams?: ReadAccountPresenceParameters, restRequestConfig?: RestRequestConfig): Promise<AccountPresenceInfo> {
    const r = await this.rc.get<AccountPresenceInfo>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
