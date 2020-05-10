import {RestRequestConfig} from '../../../../Rest';
import {GetServiceInfoResponse} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class ServiceInfo {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/service-info`;
  }

  /**
   * Operation: Get Account Service Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/service-info
   */
  async get(config?: RestRequestConfig): Promise<GetServiceInfoResponse> {
    const r = await this.rc.get<GetServiceInfoResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default ServiceInfo;
