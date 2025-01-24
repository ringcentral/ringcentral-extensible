import type GetInternalTextMessageInfoResponse from "../../../../../definitions/GetInternalTextMessageInfoResponse";
import type CreateInternalTextMessageRequest from "../../../../../definitions/CreateInternalTextMessageRequest";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/company-pager`;
  }
  /**
   * Creates and sends an internal text message (company pager message).
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/company-pager
   * Rate Limit Group: Medium
   * App Permission: InternalMessages
   * User Permission: InternalSMS
   */
  public async post(
    createInternalTextMessageRequest: CreateInternalTextMessageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetInternalTextMessageInfoResponse> {
    const r = await this.rc.post<GetInternalTextMessageInfoResponse>(
      this.path(),
      createInternalTextMessageRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
