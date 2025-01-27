import TMNoteInfo from "../../../../../definitions/TMNoteInfo.js";
import TMCreateNoteRequest from "../../../../../definitions/TMCreateNoteRequest.js";
import TMNoteList from "../../../../../definitions/TMNoteList.js";
import ListChatNotesNewParameters from "../../../../../definitions/ListChatNotesNewParameters.js";
import {
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
    return `${this._parent.path()}/notes`;
  }
  /**
   * Returns the list of chat notes.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats/{chatId}/notes
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   */
  public async get(
    queryParams?: ListChatNotesNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMNoteList> {
    const r = await this.rc.get<TMNoteList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new note in the specified chat.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/chats/{chatId}/notes
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(
    tMCreateNoteRequest: TMCreateNoteRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMNoteInfo> {
    const r = await this.rc.post<TMNoteInfo>(
      this.path(),
      tMCreateNoteRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
