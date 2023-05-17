import MessageStoreReportArchive from '../../../../../definitions/MessageStoreReportArchive';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public archiveId: string | null;

  public constructor(_parent: ParentInterface, archiveId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.archiveId = archiveId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.archiveId !== null) {
      return `${this._parent.path()}/archive/${this.archiveId}`;
    }
    return `${this._parent.path()}/archive`;
  }

  /**
   * Returns the created report with message data not including attachments.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}/archive
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<MessageStoreReportArchive> {
    const r = await this.rc.get<MessageStoreReportArchive>(this.path(false), undefined, restRequestConfig);
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
  public async get(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    if (this.archiveId === null) {
      throw new Error('archiveId must be specified.');
    }
    const r = await this.rc.get<Buffer>(this.path(), undefined, { ...restRequestConfig, responseType: 'arraybuffer' });
    return r.data;
  }
}
export default Index;
