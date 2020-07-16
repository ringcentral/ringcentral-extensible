import {RestRequestConfig} from '../../../../../Rest';
import {
  SwitchesList,
  ListAccountSwitchesParameters,
  SwitchInfo,
  CreateSwitchInfo,
  UpdateSwitchInfo,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
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
    queryParams?: ListAccountSwitchesParameters,
    config?: RestRequestConfig
  ): Promise<SwitchesList> {
    const r = await this.rc.get<SwitchesList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Switch
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches
   */
  async post(
    createSwitchInfo: CreateSwitchInfo,
    config?: RestRequestConfig
  ): Promise<SwitchInfo> {
    const r = await this.rc.post<SwitchInfo>(
      this.path(false),
      createSwitchInfo,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Switch
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async get(config?: RestRequestConfig): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.get<SwitchInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Switch
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async put(
    updateSwitchInfo: UpdateSwitchInfo,
    config?: RestRequestConfig
  ): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.put<SwitchInfo>(
      this.path(),
      updateSwitchInfo,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Switch
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
