import Tasks from './Tasks'
import Notes from './Notes'
import Posts from './Posts'
import Unread from './Unread'
import Read from './Read'
import Unfavorite from './Unfavorite'
import Favorite from './Favorite'
import GlipChatInfo from '../../../../definitions/GlipChatInfo'
import ListGlipChatsParameters from '../../../../definitions/ListGlipChatsParameters'
import GlipChatsList from '../../../../definitions/GlipChatsList'
import Parent from '..'
import RestClient from '../../../..'

class Chats {
  rc: RestClient
  chatId: string
  parent: Parent

  constructor(parent: Parent, chatId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.chatId = chatId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this.parent.path()}/chats/${this.chatId}`
    }

    return `${this.parent.path()}/chats`
  }

  /**
   * Operation: Get Chats
   * Http get /restapi/v1.0/glip/chats
   */
  async list(queryParams?: ListGlipChatsParameters): Promise<GlipChatsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Chat
   * Http get /restapi/v1.0/glip/chats/{chatId}
   */
  async get(): Promise<GlipChatInfo> {
    if (this.chatId === undefined || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  favorite(): Favorite {
    return new Favorite(this)
  }

  unfavorite(): Unfavorite {
    return new Unfavorite(this)
  }

  read(): Read {
    return new Read(this)
  }

  unread(): Unread {
    return new Unread(this)
  }

  posts(postId: string = null): Posts {
    return new Posts(this, postId)
  }

  notes(): Notes {
    return new Notes(this)
  }

  tasks(): Tasks {
    return new Tasks(this)
  }
}

export default Chats
