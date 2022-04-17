import { RestRequestConfig } from '../../../../../../Rest';
import { ReadMessageContentParameters } from '../../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  attachmentId: string | null;

  constructor(parent: Parent, attachmentId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.attachmentId = attachmentId;
  }

  path(withParameter = true): string {
    if (withParameter && this.attachmentId !== null) {
      return `${this.parent.path()}/content/${this.attachmentId}`;
    }
    return `${this.parent.path()}/content`;
  }

  /**
   * Returns a specific message attachment data as media stream.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}
   * Rate Limit Group: Medium
   * App Permission: ReadMessages
   * User Permission: ReadMessageContent
   */
  async get(
    queryParams?: ReadMessageContentParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<Buffer> {
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
