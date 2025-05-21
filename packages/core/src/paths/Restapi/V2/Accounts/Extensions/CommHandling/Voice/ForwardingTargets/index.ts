import Devices from "./Devices/index.js";
import CommRemoveForwardingTargetsResponse from "../../../../../../../../definitions/CommRemoveForwardingTargetsResponse.js";
import CommRemoveForwardingTargetsRequest from "../../../../../../../../definitions/CommRemoveForwardingTargetsRequest.js";
import CommForwardingTargetsResource from "../../../../../../../../definitions/CommForwardingTargetsResource.js";
import ReadForwardingTargetsParameters from "../../../../../../../../definitions/ReadForwardingTargetsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/forwarding-targets`;
  }
  /**
   * Returns the extension's forwarding targets.
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/forwarding-targets
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    queryParams?: ReadForwardingTargetsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommForwardingTargetsResource> {
    const r = await this.rc.get<CommForwardingTargetsResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Removes the specified forwarding targets from the extension's communication handling rules.
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/forwarding-targets
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async delete(
    commRemoveForwardingTargetsRequest: CommRemoveForwardingTargetsRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommRemoveForwardingTargetsResponse> {
    const r = await this.rc.delete<CommRemoveForwardingTargetsResponse>(
      this.path(),
      commRemoveForwardingTargetsRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public devices(deviceId: string | null = null): Devices {
    return new Devices(this, deviceId);
  }
}
export default Index;
