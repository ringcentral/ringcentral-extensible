import Unfavorite from './Unfavorite';
import Favorite from './Favorite';
import Unread from './Unread';
import Tasks from './Tasks';
import Notes from './Notes';
import Posts from './Posts';
import Read from './Read';
import {RestRequestConfig} from '../../../../Rest';
import {
  ListGlipChatsParameters,
  GlipChatsList,
  GlipChatInfo,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  chatId: string | null;

  constructor(parent: Parent, chatId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.chatId = chatId;
  }
  path(withParameter = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this.parent.path()}/chats/${this.chatId}`;
    }
    return `${this.parent.path()}/chats`;
  }
  /**
   * Returns the list of chats where the user is a member and also public teams that can be joined. All records in response are sorted by creation time of a chat in ascending order. **Note** 'Chat' is a general name for all types of threads icluding *Personal* (user's own me-chat), *Direct* (one on one chat), *Group* (chat of 3-15 participants without specific name), *Team* (chat of 2 and more participants, with a specific name), *Everyone* (company chat including all employees, with a specific name).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/chats
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async list(
    queryParams?: ListGlipChatsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipChatsList> {
    const r = await this.rc.get<GlipChatsList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns information about a chat by ID. **Note** 'Chat' is a general name for all types of threads icluding *Personal* (user's own me-chat), *Direct* (one on one chat), *Group* (chat of 3-15 participants without specific name), *Team* (chat of 2 and more participants, with a specific name), *Everyone* (company chat including all employees, with a specific name)."
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}
   * Rate Limit Group: Light
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipChatInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.get<GlipChatInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  read(): Read {
    return new Read(this);
  }

  posts(postId: string | null = null): Posts {
    return new Posts(this, postId);
  }

  notes(): Notes {
    return new Notes(this);
  }

  tasks(): Tasks {
    return new Tasks(this);
  }

  unread(): Unread {
    return new Unread(this);
  }

  favorite(): Favorite {
    return new Favorite(this);
  }

  unfavorite(): Unfavorite {
    return new Unfavorite(this);
  }
}
export default Index;
