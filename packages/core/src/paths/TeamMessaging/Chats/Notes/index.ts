import TMNoteInfo from '../../../../definitions/TMNoteInfo';
import TMCreateNoteRequest from '../../../../definitions/TMCreateNoteRequest';
import TMNoteList from '../../../../definitions/TMNoteList';
import ListChatNotesNewParameters from '../../../../definitions/ListChatNotesNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/notes`;
  }

  /**
   * Returns the list of chat notes.
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/chats/{chatId}/notes
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   */
  async get(queryParams?: ListChatNotesNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMNoteList> {
    const r = await this.rc.get<TMNoteList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new note in the specified chat.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/chats/{chatId}/notes
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMCreateNoteRequest: TMCreateNoteRequest, restRequestConfig?: RestRequestConfig): Promise<TMNoteInfo> {
    const r = await this.rc.post<TMNoteInfo>(this.path(), tMCreateNoteRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
