import {RestRequestConfig} from '../../../../../Rest';
import {
  ListWirelessPointsParameters,
  WirelessPointsList,
  CreateWirelessPoint,
  WirelessPointInfo,
  UpdateWirelessPoint,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  pointId: string | null;

  constructor(parent: Parent, pointId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.pointId = pointId;
  }

  path(withParameter = true): string {
    if (withParameter && this.pointId !== null) {
      return `${this.parent.path()}/wireless-points/${this.pointId}`;
    }
    return `${this.parent.path()}/wireless-points`;
  }

  /**
   * Returns account wireless points configured and used for Automatic Location Updates feature.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async list(
    queryParams?: ListWirelessPointsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<WirelessPointsList> {
    const r = await this.rc.get<WirelessPointsList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new wireless point in network configuration with the emergency address assigned.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    createWirelessPoint: CreateWirelessPoint,
    restRequestConfig?: RestRequestConfig
  ): Promise<WirelessPointInfo> {
    const r = await this.rc.post<WirelessPointInfo>(
      this.path(false),
      createWirelessPoint,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns the specified wireless access point of a corporate map with the emergency address assigned.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }

    const r = await this.rc.get<WirelessPointInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the specified wireless access point of a corporate map by ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async put(
    updateWirelessPoint: UpdateWirelessPoint,
    restRequestConfig?: RestRequestConfig
  ): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }

    const r = await this.rc.put<WirelessPointInfo>(
      this.path(),
      updateWirelessPoint,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes wireless point(s) of a corporate map by ID(s).
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
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
