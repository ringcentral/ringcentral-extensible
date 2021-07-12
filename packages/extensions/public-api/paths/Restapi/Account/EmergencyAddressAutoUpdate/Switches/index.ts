import {RestRequestConfig} from '../../../../../Rest';
import {
  ListAccountSwitchesParameters,
  SwitchesList,
  CreateSwitchInfo,
  SwitchInfo,
  UpdateSwitchInfo,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  switchId: string | null;

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
   * Returns corporate map of configured network switches with the assigned emergency addresses for the logged-in account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async list(
    queryParams?: ListAccountSwitchesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<SwitchesList> {
    const r = await this.rc.get<SwitchesList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new switch in corporate map based on chassis ID and used for Automatic Locations Update feature.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    createSwitchInfo: CreateSwitchInfo,
    restRequestConfig?: RestRequestConfig
  ): Promise<SwitchInfo> {
    const r = await this.rc.post<SwitchInfo>(
      this.path(false),
      createSwitchInfo,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns the specified switch with the assigned emergency address.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.get<SwitchInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates switch. Partial update is not supported, all switch parameters should be specified. If null value is received or parameter is missing, its value is removed.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async put(
    updateSwitchInfo: UpdateSwitchInfo,
    restRequestConfig?: RestRequestConfig
  ): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.put<SwitchInfo>(
      this.path(),
      updateSwitchInfo,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes wireless switch(es) in network configuration for Automatic Location Updates feature.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.switchId === null) {
      throw new Error('switchId must be specified.');
    }

    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
