import type ReadMessageContentParameters from '../../../../../../definitions/ReadMessageContentParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public attachmentId: string | null;

  public constructor(_parent: ParentInterface, attachmentId: string | null = null) {
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
   * Returns media content of a message attachment.
   * The content is typically an audio file (`audio/mpeg` or `audio/wav`) for voicemails,
   * TIFF or PDF for faxes and image/audio/video for MMS.
   *
   * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}
   * Rate Limit Group: Medium
   * App Permission: ReadMessages
   */
  public async get(queryParams?: ReadMessageContentParameters, restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    if (this.attachmentId === null) {
      throw new Error('attachmentId must be specified.');
    }
    const r = await this.rc.get<Buffer>(this.path(), queryParams, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}
export default Index;
