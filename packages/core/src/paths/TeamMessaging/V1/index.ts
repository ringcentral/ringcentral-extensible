import AdaptiveCards from './AdaptiveCards';
import Conversations from './Conversations';
import DataExport from './DataExport';
import Favorites from './Favorites';
import Companies from './Companies';
import Everyone from './Everyone';
import Webhooks from './Webhooks';
import Persons from './Persons';
import Events from './Events';
import Recent from './Recent';
import Groups from './Groups';
import Files from './Files';
import Notes from './Notes';
import Teams from './Teams';
import Chats from './Chats';
import Tasks from './Tasks';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/v1`;
  }

  tasks(taskId: (string | null) = null): Tasks {
    return new Tasks(this, taskId);
  }

  chats(chatId: (string | null) = null): Chats {
    return new Chats(this, chatId);
  }

  teams(chatId: (string | null) = null): Teams {
    return new Teams(this, chatId);
  }

  notes(noteId: (string | null) = null): Notes {
    return new Notes(this, noteId);
  }

  files(): Files {
    return new Files(this);
  }

  groups(groupId: (string | null) = null): Groups {
    return new Groups(this, groupId);
  }

  recent(): Recent {
    return new Recent(this);
  }

  events(eventId: (string | null) = null): Events {
    return new Events(this, eventId);
  }

  persons(personId: (string | null) = null): Persons {
    return new Persons(this, personId);
  }

  webhooks(webhookId: (string | null) = null): Webhooks {
    return new Webhooks(this, webhookId);
  }

  everyone(): Everyone {
    return new Everyone(this);
  }

  companies(companyId: (string | null) = null): Companies {
    return new Companies(this, companyId);
  }

  favorites(): Favorites {
    return new Favorites(this);
  }

  dataExport(taskId: (string | null) = null): DataExport {
    return new DataExport(this, taskId);
  }

  conversations(chatId: (string | null) = null): Conversations {
    return new Conversations(this, chatId);
  }

  adaptiveCards(cardId: (string | null) = null): AdaptiveCards {
    return new AdaptiveCards(this, cardId);
  }
}
export default Index;
