import GlipNoteInfo from '../../../../../definitions/GlipNoteInfo';
import GlipNoteCreate from '../../../../../definitions/GlipNoteCreate';
import GlipNotesInfo from '../../../../../definitions/GlipNotesInfo';
import ListChatNotesParameters from '../../../../../definitions/ListChatNotesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Returns the list of notes created in the specified chat.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/notes
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(queryParams?: ListChatNotesParameters, restRequestConfig?: RestRequestConfig): Promise<GlipNotesInfo> {
    const r = await this.rc.get<GlipNotesInfo>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new note in the specified chat.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/notes
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(glipNoteCreate: GlipNoteCreate, restRequestConfig?: RestRequestConfig): Promise<GlipNoteInfo> {
    const r = await this.rc.post<GlipNoteInfo>(this.path(), glipNoteCreate, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
