import {RestRequestConfig} from '../../../../Rest';
import {IVRMenuInfo} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  ivrMenuId: string | null;

  constructor(parent: Parent, ivrMenuId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.ivrMenuId = ivrMenuId;
  }
  path(withParameter = true): string {
    if (withParameter && this.ivrMenuId !== null) {
      return `${this.parent.path()}/ivr-menus/${this.ivrMenuId}`;
    }
    return `${this.parent.path()}/ivr-menus`;
  }
  /**
   * Creates a company IVR menu.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: AutoReceptionist
   */
  async post(
    iVRMenuInfo: IVRMenuInfo,
    restRequestConfig?: RestRequestConfig
  ): Promise<IVRMenuInfo> {
    const r = await this.rc.post<IVRMenuInfo>(
      this.path(false),
      iVRMenuInfo,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns a company IVR menu by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: AutoReceptionist
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<IVRMenuInfo> {
    if (this.ivrMenuId === null) {
      throw new Error('ivrMenuId must be specified.');
    }
    const r = await this.rc.get<IVRMenuInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates a company IVR menu by ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: AutoReceptionist
   */
  async put(
    iVRMenuInfo: IVRMenuInfo,
    restRequestConfig?: RestRequestConfig
  ): Promise<IVRMenuInfo> {
    if (this.ivrMenuId === null) {
      throw new Error('ivrMenuId must be specified.');
    }
    const r = await this.rc.put<IVRMenuInfo>(
      this.path(),
      iVRMenuInfo,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
