import AdaptiveCards from './AdaptiveCards';
import Unfavorite from './Unfavorite';
import Favorite from './Favorite';
import Notes from './Notes';
import Tasks from './Tasks';
import Posts from './Posts';
import type TMChatInfo from '../../../../definitions/TMChatInfo';
import type TMChatList from '../../../../definitions/TMChatList';
import type ListGlipChatsNewParameters from '../../../../definitions/ListGlipChatsNewParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public chatId: string | null;

  public constructor(_parent: ParentInterface, chatId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.chatId = chatId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this._parent.path()}/chats/${this.chatId}`;
    }
    return `${this._parent.path()}/chats`;
  }
  /**
   * Returns the list of chats where the user is a member and also public teams that can be joined.
   *
   * All records in response are sorted by creation time of a chat in ascending order.
   *
   * **Chat types**
   *
   * There are multiple types of chats, including:
   *
   * * **Personal** - each user is given a dedicated "personal chat" in which they are the only member.
   * * **Direct** - a chat between two individuals.
   * * **Group** - a chat between three or more named individuals. A "group" chat has no name.
   * * **Team** - a chat related to a specific topic. Members can come and go freely from this chat type.
   * * **Everyone** - a special chat containing every individual in a company.
   *
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async list(
    queryParams?: ListGlipChatsNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMChatList> {
    const r = await this.rc.get<TMChatList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information about a chat by ID.
   *
   * **Note** 'Chat' is a general name for all types of threads including *Personal* (user's own me-chat), *Direct* (one on one chat), *Group* (chat of 3-15 participants without specific name), *Team* (chat of 2 and more participants, with a specific name), *Everyone* (company chat including all employees, with a specific name)."
   *
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats/{chatId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMChatInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.get<TMChatInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  public posts(postId: string | null = null): Posts {
    return new Posts(this, postId);
  }

  public tasks(): Tasks {
    return new Tasks(this);
  }

  public notes(): Notes {
    return new Notes(this);
  }

  public favorite(): Favorite {
    return new Favorite(this);
  }

  public unfavorite(): Unfavorite {
    return new Unfavorite(this);
  }

  public adaptiveCards(): AdaptiveCards {
    return new AdaptiveCards(this);
  }
}
export default Index;
