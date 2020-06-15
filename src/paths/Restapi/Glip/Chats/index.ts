import Tasks from './Tasks';
import Notes from './Notes';
import Posts from './Posts';
import Unread from './Unread';
import Read from './Read';
import Unfavorite from './Unfavorite';
import Favorite from './Favorite';
import {RestRequestConfig} from '../../../../Rest';
import {
  GlipChatsList,
  ListGlipChatsParameters,
  GlipChatInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  chatId: string | null;
  parent: Parent;

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
   * Operation: Get Chats
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/chats
   */
  async list(
    queryParams?: ListGlipChatsParameters,
    config?: RestRequestConfig
  ): Promise<GlipChatsList> {
    const r = await this.rc.get<GlipChatsList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Chat
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/chats/{chatId}
   */
  async get(config?: RestRequestConfig): Promise<GlipChatInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }

    const r = await this.rc.get<GlipChatInfo>(this.path(), undefined, config);
    return r.data;
  }

  favorite(): Favorite {
    return new Favorite(this);
  }

  unfavorite(): Unfavorite {
    return new Unfavorite(this);
  }

  read(): Read {
    return new Read(this);
  }

  unread(): Unread {
    return new Unread(this);
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
}

export default Index;
