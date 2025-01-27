import UpdateSwitchInfo from "../../../../../definitions/UpdateSwitchInfo.js";
import SwitchInfo from "../../../../../definitions/SwitchInfo.js";
import CreateSwitchInfo from "../../../../../definitions/CreateSwitchInfo.js";
import SwitchesList from "../../../../../definitions/SwitchesList.js";
import ListAccountSwitchesParameters from "../../../../../definitions/ListAccountSwitchesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public switchId: string | null;

  public constructor(_parent: ParentInterface, switchId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.switchId = switchId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.switchId !== null) {
      return `${this._parent.path()}/switches/${this.switchId}`;
    }
    return `${this._parent.path()}/switches`;
  }
  /**
   * Returns a corporate map of configured network switches with the assigned
   * emergency addresses for the logged-in account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async list(
    queryParams?: ListAccountSwitchesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SwitchesList> {
    const r = await this.rc.get<SwitchesList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new switch in corporate map based on chassis ID and used
   * for Automatic Locations Update feature.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    createSwitchInfo: CreateSwitchInfo,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SwitchInfo> {
    const r = await this.rc.post<SwitchInfo>(
      this.path(false),
      createSwitchInfo,
      undefined,
      restRequestConfig,
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
  public async get(restRequestConfig?: RestRequestConfig): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error("switchId must be specified.");
    }
    const r = await this.rc.get<SwitchInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates switch. Partial update is not supported, all switch parameters
   * should be specified. If null value is received or parameter is missing, its
   * value is removed.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async put(
    updateSwitchInfo: UpdateSwitchInfo,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SwitchInfo> {
    if (this.switchId === null) {
      throw new Error("switchId must be specified.");
    }
    const r = await this.rc.put<SwitchInfo>(
      this.path(),
      updateSwitchInfo,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes wireless switch(es) in a network configuration for Automatic
   * Location Updates feature.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.switchId === null) {
      throw new Error("switchId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
