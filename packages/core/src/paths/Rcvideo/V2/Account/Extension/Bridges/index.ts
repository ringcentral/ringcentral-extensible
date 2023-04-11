import Default from './Default';
import BridgeResponse from '../../../../../../definitions/BridgeResponse';
import CreateBridgeRequest from '../../../../../../definitions/CreateBridgeRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bridges`;
  }

  /**
   * Creates a new bridge for the user specified by **accountId** and **extensionId** identifiers. The request body
 * should contain JSON object which describes properties of the new bridge.
 * The bridge can be created by a user himself, his delegate or any user who has the **Super Admin** privilege.
 *
   * HTTP Method: post
   * Endpoint: /rcvideo/v2/account/{accountId}/extension/{extensionId}/bridges
   * Rate Limit Group: Heavy
   * App Permission: Video
   */
  async post(createBridgeRequest: CreateBridgeRequest, restRequestConfig?: RestRequestConfig): Promise<BridgeResponse> {
    const r = await this.rc.post<BridgeResponse>(this.path(), createBridgeRequest, undefined, restRequestConfig);
    return r.data;
  }

  default(): Default {
    return new Default(this);
  }
}
export default Index;
