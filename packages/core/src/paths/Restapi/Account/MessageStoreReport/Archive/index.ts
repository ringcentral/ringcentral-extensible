import MessageStoreReportArchive from "../../../../../definitions/MessageStoreReportArchive";
import {
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
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageStoreReportArchive> {
    const r = await this.rc.get<MessageStoreReportArchive>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
