import type MessageThread from "../../../../definitions/MessageThread.js";
import type MessageThreadList from "../../../../definitions/MessageThreadList.js";
import type MthListThreadsParameters from "../../../../definitions/MthListThreadsParameters.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";
import Assign from "./Assign/index.js";
import Entries from "./Entries/index.js";
import Messages from "./Messages/index.js";
import Notes from "./Notes/index.js";
import Resolve from "./Resolve/index.js";
import Sync from "./Sync/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public threadId: string | null;

  public constructor(_parent: ParentInterface, threadId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.threadId = threadId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.threadId !== null) {
      return `${this._parent.path()}/message-threads/${this.threadId}`;
    }
    return `${this._parent.path()}/message-threads`;
  }
  /**
   * Returns a paginated list of message threads for the specified account according to the specified criteria.
   *
   * Different filters are combined with logical "AND", different values for the same filter (if supported)
   * are combined with logical "OR".
   *
   * Only threads that accessible for a current authorized user are returned.
   * The records are sorted by `creationTime` in ascending order.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async list(
    queryParams?: MthListThreadsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageThreadList> {
    const r = await this.rc.get<MessageThreadList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a message thread by ID.
   *
   * API returns a 403 error if the current user does not have access to the given thread.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/{threadId}
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageThread> {
    if (this.threadId === null) {
      throw new Error("threadId must be specified.");
    }
    const r = await this.rc.get<MessageThread>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a message thread by IDs.
   *
   * Technically this operation just sets thread's `availability` to `Deleted`.
   * API returns a 403 error if the current user does not have access to the given thread.
   *
   * Once the thread is deleted its `assignee` attribute is cleared automatically.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/{threadId}
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.threadId === null) {
      throw new Error("threadId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public sync(): Sync {
    return new Sync(this);
  }

  public notes(noteId: string | null = null): Notes {
    return new Notes(this, noteId);
  }

  public assign(): Assign {
    return new Assign(this);
  }

  public entries(): Entries {
    return new Entries(this);
  }

  public resolve(): Resolve {
    return new Resolve(this);
  }

  public messages(): Messages {
    return new Messages(this);
  }
}
export default Index;
