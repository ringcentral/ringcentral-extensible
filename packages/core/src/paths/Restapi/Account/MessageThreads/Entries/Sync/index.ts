import type MthSyncEntriesParameters from "../../../../../../definitions/MthSyncEntriesParameters.js";
import type ThreadEntriesSyncList from "../../../../../../definitions/ThreadEntriesSyncList.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

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
   * Synchronizes the list of thread entries. The response may contain:
   * - added or updated messages (full payload);
   * - added or updated notes (full payload);
   * - deleted message entries (limited attributes, `availability` is set to `Deleted`);
   * - deleted note entries (limited attributes, `availability` is set to `Deleted`);
   * - system entries (`action` describes the action performed).
   *
   * In `FSync` model:
   * - only `Alive` messages and notes are returned;
   * - only messages and notes from `Open` threads are returned (unless explicit `threadIds` are requested).
   *
   * The records are sorted by `lastModifiedTime` in descending order.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/entries/sync
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async get(
    queryParams?: MthSyncEntriesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadEntriesSyncList> {
    const r = await this.rc.get<ThreadEntriesSyncList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
