import {
  SwitchesList,
  ListAccountSwitchesParameters,
  SwitchInfo,
  CreateSwitchInfo,
  UpdateSwitchInfo,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Switches {
  rc: RestClient;
  switchId: string | null;
  parent: Parent;

  constructor(parent: Parent, switchId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.switchId = switchId;
  }

  path(withParameter = true): string {
    if (withParameter && this.switchId !== null) {
      return `${this.parent.path()}/switches/${this.switchId}`;
    }

    return `${this.parent.path()}/switches`;
  }

  /**
   * Operation: Get Account Switch List
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches
   */
  async list(
    queryParams?: ListAccountSwitchesParameters
  ): Promise<SwitchesList> {
    const r = await this.rc.get<SwitchesList>(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Create Switch
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches
   */
  async post(createSwitchInfo: CreateSwitchInfo): Promise<SwitchInfo> {
    const r = await this.rc.post<SwitchInfo>(
      this.path(false),
      createSwitchInfo
    );
    return r.data;
  }

  /**
   * Operation: Get Switch
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async get(): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.get<SwitchInfo>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Switch
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async put(updateSwitchInfo: UpdateSwitchInfo): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.put<SwitchInfo>(this.path(), updateSwitchInfo);
    return r.data;
  }

  /**
   * Operation: Delete Switch
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async delete(): Promise<string> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }
}

export default Switches;
