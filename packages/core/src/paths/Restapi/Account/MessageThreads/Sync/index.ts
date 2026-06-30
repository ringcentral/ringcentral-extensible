import type MthSyncThreadsParameters from "../../../../../definitions/MthSyncThreadsParameters.js";
import type ThreadSyncList from "../../../../../definitions/ThreadSyncList.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/sync`;
  }
  /**
   * Synchronizes the list of message threads.
   * Returns the thread records that the current user can monitor
   * (assigned to current user, assigned to other users or unassigned).
   *
   * In `FSync` mode, only `Open` and `Alive`threads are returned.
   * The records are sorted by `lastModifiedTime` in descending order.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/sync
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async get(
    queryParams?: MthSyncThreadsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadSyncList> {
    const r = await this.rc.get<ThreadSyncList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
