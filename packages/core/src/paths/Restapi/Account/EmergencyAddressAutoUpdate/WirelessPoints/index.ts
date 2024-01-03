import type UpdateWirelessPoint from '../../../../../definitions/UpdateWirelessPoint';
import type WirelessPointInfo from '../../../../../definitions/WirelessPointInfo';
import type CreateWirelessPoint from '../../../../../definitions/CreateWirelessPoint';
import type WirelessPointsList from '../../../../../definitions/WirelessPointsList';
import type ListWirelessPointsParameters from '../../../../../definitions/ListWirelessPointsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public pointId: string | null;

  public constructor(_parent: ParentInterface, pointId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.pointId = pointId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.pointId !== null) {
      return `${this._parent.path()}/wireless-points/${this.pointId}`;
    }
    return `${this._parent.path()}/wireless-points`;
  }
  /**
   * Returns account wireless points configured and used for Automatic
   * Location Updates feature.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async list(
    queryParams?: ListWirelessPointsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WirelessPointsList> {
    const r = await this.rc.get<WirelessPointsList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new wireless point in network configuration with the
   * emergency address assigned.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    createWirelessPoint: CreateWirelessPoint,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WirelessPointInfo> {
    const r = await this.rc.post<WirelessPointInfo>(
      this.path(false),
      createWirelessPoint,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the specified wireless access point of a corporate map
   * with the emergency address assigned.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }
    const r = await this.rc.get<WirelessPointInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the specified wireless access point of a corporate map
   * by ID.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async put(
    updateWirelessPoint: UpdateWirelessPoint,
    restRequestConfig?: RestRequestConfig,
  ): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }
    const r = await this.rc.put<WirelessPointInfo>(this.path(), updateWirelessPoint, undefined, restRequestConfig);
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
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
