import {RestRequestConfig} from '../../../../Rest';
import {IVRMenuInfo} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class IvrMenus {
  rc: RingCentral;
  ivrMenuId: string | null;
  parent: Parent;

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
   * Operation: Create IVR Menu
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/ivr-menus
   */
  async post(
    iVRMenuInfo: IVRMenuInfo,
    config?: RestRequestConfig
  ): Promise<IVRMenuInfo> {
    const r = await this.rc.post<IVRMenuInfo>(
      this.path(false),
      iVRMenuInfo,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get IVR Menu
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}
   */
  async get(config?: RestRequestConfig): Promise<IVRMenuInfo> {
    if (this.ivrMenuId === null) {
      throw new Error('ivrMenuId must be specified.');
    }

    const r = await this.rc.get<IVRMenuInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update IVR Menu
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}
   */
  async put(
    iVRMenuInfo: IVRMenuInfo,
    config?: RestRequestConfig
  ): Promise<IVRMenuInfo> {
    if (this.ivrMenuId === null) {
      throw new Error('ivrMenuId must be specified.');
    }

    const r = await this.rc.put<IVRMenuInfo>(
      this.path(),
      iVRMenuInfo,
      undefined,
      config
    );
    return r.data;
  }
}

export default IvrMenus;
