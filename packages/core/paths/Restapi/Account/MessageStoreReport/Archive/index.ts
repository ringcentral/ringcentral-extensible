import {RestRequestConfig} from '../../../../../Rest';
import {MessageStoreReportArchive} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  archiveId: string | null;
  parent: Parent;

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
   * Operation: Get Message Store Report Archive
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive
   */
  async list(config?: RestRequestConfig): Promise<MessageStoreReportArchive> {
    const r = await this.rc.get<MessageStoreReportArchive>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Message Store Report Archive Content
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}
   */
  async get(config?: RestRequestConfig): Promise<Buffer> {
    if (this.archiveId === null) {
      throw new Error('archiveId must be specified.');
    }

    const r = await this.rc.get<Buffer>(this.path(), undefined, {
      ...config,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}

export default Index;
