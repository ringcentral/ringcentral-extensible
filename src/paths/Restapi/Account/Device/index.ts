import {RestRequestConfig} from '../../../../Rest';
import {
  GetDeviceInfoResponse,
  ReadDeviceParameters,
  AccountDeviceUpdate,
  UpdateDeviceParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  deviceId: string | null;
  parent: Parent;

  constructor(parent: Parent, deviceId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.deviceId = deviceId;
  }

  path(withParameter = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this.parent.path()}/device/${this.deviceId}`;
    }

    return `${this.parent.path()}/device`;
  }

  /**
   * Operation: Get Device
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async get(
    queryParams?: ReadDeviceParameters,
    config?: RestRequestConfig
  ): Promise<GetDeviceInfoResponse> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.');
    }

    const r = await this.rc.get<GetDeviceInfoResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Device
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async put(
    accountDeviceUpdate: AccountDeviceUpdate,
    queryParams?: UpdateDeviceParameters,
    config?: RestRequestConfig
  ): Promise<GetDeviceInfoResponse> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.');
    }

    const r = await this.rc.put<GetDeviceInfoResponse>(
      this.path(),
      accountDeviceUpdate,
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
