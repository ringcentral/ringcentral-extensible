import {RestRequestConfig} from '../../../../../Rest';
import {
  WirelessPointsList,
  ListWirelessPointsParameters,
  WirelessPointInfo,
  CreateWirelessPoint,
  UpdateWirelessPoint,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  pointId: string | null;
  parent: Parent;

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
   * Operation: Get Wireless Point List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points
   */
  async list(
    queryParams?: ListWirelessPointsParameters,
    config?: RestRequestConfig
  ): Promise<WirelessPointsList> {
    const r = await this.rc.get<WirelessPointsList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Wireless Point
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points
   */
  async post(
    createWirelessPoint: CreateWirelessPoint,
    config?: RestRequestConfig
  ): Promise<WirelessPointInfo> {
    const r = await this.rc.post<WirelessPointInfo>(
      this.path(false),
      createWirelessPoint,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Wireless Point
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async get(config?: RestRequestConfig): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }

    const r = await this.rc.get<WirelessPointInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Wireless Point
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async put(
    updateWirelessPoint: UpdateWirelessPoint,
    config?: RestRequestConfig
  ): Promise<WirelessPointInfo> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }

    const r = await this.rc.put<WirelessPointInfo>(
      this.path(),
      updateWirelessPoint,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Wireless Point
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.pointId === null) {
      throw new Error('pointId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
