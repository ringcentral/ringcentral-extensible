import type MthListNotesParameters from "../../../../../definitions/MthListNotesParameters.js";
import type ThreadNoteCreateRequest from "../../../../../definitions/ThreadNoteCreateRequest.js";
import type ThreadNoteList from "../../../../../definitions/ThreadNoteList.js";
import type ThreadNoteModel from "../../../../../definitions/ThreadNoteModel.js";
import type ThreadNotesDeleteRequest from "../../../../../definitions/ThreadNotesDeleteRequest.js";
import type ThreadNoteUpdateRequest from "../../../../../definitions/ThreadNoteUpdateRequest.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public noteId: string | null;

  public constructor(_parent: ParentInterface, noteId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.noteId = noteId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.noteId !== null) {
      return `${this._parent.path()}/notes/${this.noteId}`;
    }
    return `${this._parent.path()}/notes`;
  }
  /**
   * Returns a list of notes from one or more threads.
   * All filters are applied as "AND" conditions.
   *
   * The records are sorted by `creationTime` in ascending order.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/notes
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async get(
    queryParams?: MthListNotesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadNoteList> {
    const r = await this.rc.get<ThreadNoteList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new note in the thread.
   *
   * The thread must be in `Open` status and the current user must be in the list of thread monitors
   * for this operation to succeed.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/notes
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async post(
    threadNoteCreateRequest: ThreadNoteCreateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadNoteModel> {
    const r = await this.rc.post<ThreadNoteModel>(
      this.path(false),
      threadNoteCreateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes thread note(s).
   *
   * The corresponding threads must be in `Open` status and the calling user must be the notes' author
   * for this operation to succeed.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/notes
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async delete(
    threadNotesDeleteRequest: ThreadNotesDeleteRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.delete<string>(
      this.path(false),
      threadNotesDeleteRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the text of a note.
   *
   * The thread must be in `Open` status and the calling user must be the note's author
   * for this operation to succeed.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async patch(
    threadNoteUpdateRequest: ThreadNoteUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadNoteModel> {
    if (this.noteId === null) {
      throw new Error("noteId must be specified.");
    }
    const r = await this.rc.patch<ThreadNoteModel>(
      this.path(),
      threadNoteUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
