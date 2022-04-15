import { RestRequestConfig } from '../../../../../Rest';
import {
  ListChatNotesParameters,
  GlipNotesInfo,
  GlipNoteCreate,
  GlipNoteInfo,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    queryParams?: ListChatNotesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GlipNotesInfo> {
    const r = await this.rc.get<GlipNotesInfo>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
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
  async post(
    glipNoteCreate: GlipNoteCreate,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GlipNoteInfo> {
    const r = await this.rc.post<GlipNoteInfo>(
      this.path(),
      glipNoteCreate,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
