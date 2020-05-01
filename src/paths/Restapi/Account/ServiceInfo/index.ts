import {GetServiceInfoResponse} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class ServiceInfo {
  rc: RestClient;
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
  async get(): Promise<GetServiceInfoResponse> {
    const r = await this.rc.get(this.path());
    return r.data;
  }
}

export default ServiceInfo;
