import { RestRequestConfig } from '../../../../../Rest';
import { MessageStoreReportArchive } from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  archiveId: string | null;

  constructor(parent: Parent, archiveId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.archiveId = archiveId;
  }

  path(withParameter = true): string {
    if (withParameter && this.archiveId !== null) {
      return `${this.parent.path()}/archive/${this.archiveId}`;
    }
    return `${this.parent.path()}/archive`;
  }

  /**
   * Returns the created report with message data not including attachments.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}/archive
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageStoreReportArchive> {
    const r = await this.rc.get<MessageStoreReportArchive>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns one of the report archives with message contents in application/zip format.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    if (this.archiveId === null) {
      throw new Error('archiveId must be specified.');
    }
    const r = await this.rc.get<Buffer>(this.path(), undefined, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}
export default Index;
