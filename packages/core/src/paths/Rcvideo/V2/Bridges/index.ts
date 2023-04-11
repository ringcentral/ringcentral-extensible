import Pin from './Pin';
import UpdateBridgeRequest from '../../../../definitions/UpdateBridgeRequest';
import BridgeResponse from '../../../../definitions/BridgeResponse';
import GetBridgeParameters from '../../../../definitions/GetBridgeParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  bridgeId: string | null;

  constructor(parent: ParentInterface, bridgeId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.bridgeId = bridgeId;
  }

  path(withParameter = true): string {
    if (withParameter && this.bridgeId !== null) {
      return `${this.parent.path()}/bridges/${this.bridgeId}`;
    }
    return `${this.parent.path()}/bridges`;
  }

  /**
   * Returns a bridge by **bridgeId** identifier.
   * HTTP Method: get
   * Endpoint: /rcvideo/v2/bridges/{bridgeId}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async get(queryParams?: GetBridgeParameters, restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    if (this.bridgeId === null) {
      throw new Error('bridgeId must be specified.');
    }
    const r = await this.rc.get<BridgeResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a bridge by **bridgeId** identifier.
 * Deletion can only be done by bridge owner, his delegate or any user who has the **Super Admin** privilege.
 *
   * HTTP Method: delete
   * Endpoint: /rcvideo/v2/bridges/{bridgeId}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.bridgeId === null) {
      throw new Error('bridgeId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a bridge by **bridgeId** identifier. The request body should contain JSON object with updating properties.
 * Update can only be done by bridge owner, his delegate or any user who has the **Super Admin** privilege.
 *
   * HTTP Method: patch
   * Endpoint: /rcvideo/v2/bridges/{bridgeId}
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async patch(updateBridgeRequest: UpdateBridgeRequest, restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    if (this.bridgeId === null) {
      throw new Error('bridgeId must be specified.');
    }
    const r = await this.rc.patch<BridgeResponse>(this.path(), updateBridgeRequest, undefined, restRequestConfig);
    return r.data;
  }

  pin(): Pin {
    return new Pin(this);
  }
}
export default Index;
