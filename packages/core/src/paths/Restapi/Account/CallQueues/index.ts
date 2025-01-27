import BulkAssign from "./BulkAssign/index.js";
import Presence from "./Presence/index.js";
import Members from "./Members/index.js";
import CallQueueDetailsForUpdate from "../../../../definitions/CallQueueDetailsForUpdate.js";
import CallQueueDetails from "../../../../definitions/CallQueueDetails.js";
import CallQueueList from "../../../../definitions/CallQueueList.js";
import ListCallQueuesParameters from "../../../../definitions/ListCallQueuesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public groupId: string | null;

  public constructor(_parent: ParentInterface, groupId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.groupId = groupId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this._parent.path()}/call-queues/${this.groupId}`;
    }
    return `${this._parent.path()}/call-queues`;
  }
  /**
   * Returns a call queue list.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async list(
    queryParams?: ListCallQueuesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallQueueList> {
    const r = await this.rc.get<CallQueueList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns basic information on a call queue group extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallQueueDetails> {
    if (this.groupId === null) {
      throw new Error("groupId must be specified.");
    }
    const r = await this.rc.get<CallQueueDetails>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates information on a call queue group extension.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}
   * Rate Limit Group: Light
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  public async put(
    callQueueDetailsForUpdate: CallQueueDetailsForUpdate,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallQueueDetails> {
    if (this.groupId === null) {
      throw new Error("groupId must be specified.");
    }
    const r = await this.rc.put<CallQueueDetails>(
      this.path(),
      callQueueDetailsForUpdate,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public members(): Members {
    return new Members(this);
  }

  public presence(): Presence {
    return new Presence(this);
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
