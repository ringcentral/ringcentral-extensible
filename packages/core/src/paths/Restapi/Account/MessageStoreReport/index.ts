import Archive from "./Archive";
import type MessageStoreReport from "../../../../definitions/MessageStoreReport";
import type CreateMessageStoreReportRequest from "../../../../definitions/CreateMessageStoreReportRequest";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public taskId: string | null;

  public constructor(_parent: ParentInterface, taskId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.taskId = taskId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this._parent.path()}/message-store-report/${this.taskId}`;
    }
    return `${this._parent.path()}/message-store-report`;
  }
  /**
   * Creates a task to collect all account messages within the specified
   * time interval. Maximum number of simultaneous tasks per account is 2.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  public async post(
    createMessageStoreReportRequest: CreateMessageStoreReportRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageStoreReport> {
    const r = await this.rc.post<MessageStoreReport>(
      this.path(false),
      createMessageStoreReportRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the current status of a task on report creation.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageStoreReport> {
    if (this.taskId === null) {
      throw new Error("taskId must be specified.");
    }
    const r = await this.rc.get<MessageStoreReport>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public archive(): Archive {
    return new Archive(this);
  }
}
export default Index;
