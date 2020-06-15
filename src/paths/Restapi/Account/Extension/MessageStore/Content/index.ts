import {RestRequestConfig} from '../../../../../../Rest';
import {ReadMessageContentParameters} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  attachmentId: string | null;
  parent: Parent;

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
   * Operation: Get Message Content
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}
   */
  async get(
    queryParams?: ReadMessageContentParameters,
    config?: RestRequestConfig
  ): Promise<Buffer> {
    if (this.attachmentId === null) {
      throw new Error('attachmentId must be specified.');
    }

    const r = await this.rc.get<Buffer>(this.path(), queryParams, {
      ...config,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}

export default Index;
