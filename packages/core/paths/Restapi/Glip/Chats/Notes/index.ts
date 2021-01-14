import {RestRequestConfig} from '../../../../../Rest';
import {
  GlipNotesInfo,
  ListChatNotesParameters,
  GlipNoteInfo,
  GlipNoteCreate,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Operation: Get Chat Notes
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/glip/chats/{chatId}/notes
   */
  async get(
    queryParams?: ListChatNotesParameters,
    config?: RestRequestConfig
  ): Promise<GlipNotesInfo> {
    const r = await this.rc.get<GlipNotesInfo>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Note
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/notes
   */
  async post(
    glipNoteCreate: GlipNoteCreate,
    config?: RestRequestConfig
  ): Promise<GlipNoteInfo> {
    const r = await this.rc.post<GlipNoteInfo>(
      this.path(),
      glipNoteCreate,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
