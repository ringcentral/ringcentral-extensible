import DataExport from './DataExport'
import Posts from './Posts'
import Preferences from './Preferences'
import Webhooks from './Webhooks'
import Companies from './Companies'
import Persons from './Persons'
import Tasks from './Tasks'
import Notes from './Notes'
import Events from './Events'
import Cards from './Cards'
import Groups from './Groups'
import Favorites from './Favorites'
import Recent from './Recent'
import Everyone from './Everyone'
import Teams from './Teams'
import Conversations from './Conversations'
import Chats from './Chats'
import Parent from '..'
import RestClient from '../../..'

class Glip {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/glip`
  }

  chats(chatId: string = null): Chats {
    return new Chats(this, chatId)
  }

  conversations(chatId: string = null): Conversations {
    return new Conversations(this, chatId)
  }

  teams(chatId: string = null): Teams {
    return new Teams(this, chatId)
  }

  everyone(): Everyone {
    return new Everyone(this)
  }

  recent(): Recent {
    return new Recent(this)
  }

  favorites(): Favorites {
    return new Favorites(this)
  }

  groups(groupId: string = null): Groups {
    return new Groups(this, groupId)
  }

  cards(cardId: string = null): Cards {
    return new Cards(this, cardId)
  }

  events(eventId: string = null): Events {
    return new Events(this, eventId)
  }

  notes(noteId: string = null): Notes {
    return new Notes(this, noteId)
  }

  tasks(taskId: string = null): Tasks {
    return new Tasks(this, taskId)
  }

  persons(personId: string = null): Persons {
    return new Persons(this, personId)
  }

  companies(companyId: string = null): Companies {
    return new Companies(this, companyId)
  }

  webhooks(webhookId: string = null): Webhooks {
    return new Webhooks(this, webhookId)
  }

  preferences(): Preferences {
    return new Preferences(this)
  }

  posts(): Posts {
    return new Posts(this)
  }

  dataExport(taskId: string = null): DataExport {
    return new DataExport(this, taskId)
  }
}

export default Glip
