import type MthReadMessageContentParameters from "../../../../../../definitions/MthReadMessageContentParameters.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public attachmentId: string | null;

  public constructor(
    _parent: ParentInterface,
    attachmentId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.attachmentId = attachmentId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.attachmentId !== null) {
      return `${this._parent.path()}/content/${this.attachmentId}`;
    }
    return `${this._parent.path()}/content`;
  }
  /**
   * Returns media content of a rich message attachment.
   *
   * See [Sending MMS](https://developers.ringcentral.com/guide/messaging/sms/sending-images) for the list of supported media types.
   *
   * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/messages/{messageId}/content/{attachmentId}
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async get(
    queryParams?: MthReadMessageContentParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<Uint8Array> {
    if (this.attachmentId === null) {
      throw new Error("attachmentId must be specified.");
    }
    const r = await this.rc.get<Uint8Array>(this.path(), queryParams, {
      ...restRequestConfig,
      responseType: "arraybuffer",
    });
    return r.data;
  }
}
export default Index;
