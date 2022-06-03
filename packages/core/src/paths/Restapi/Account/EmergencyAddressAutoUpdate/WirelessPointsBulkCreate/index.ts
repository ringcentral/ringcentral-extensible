import CreateMultipleWirelessPointsResponse from '../../../../../definitions/CreateMultipleWirelessPointsResponse';
import CreateMultipleWirelessPointsRequest from '../../../../../definitions/CreateMultipleWirelessPointsRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/wireless-points-bulk-create`;
  }

  /**
   * Creates multiple wireless points in corporate map. The maximum number of wireless points per request is 10 000; limitation for account is 70 000.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(createMultipleWirelessPointsRequest: CreateMultipleWirelessPointsRequest, restRequestConfig?: RestRequestConfig): Promise<CreateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<CreateMultipleWirelessPointsResponse>(this.path(), createMultipleWirelessPointsRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
