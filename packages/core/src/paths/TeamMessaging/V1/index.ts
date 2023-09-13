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
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path(false)}/v1`;
  }

  public tasks(taskId: (string | null) = null): Tasks {
    return new Tasks(this, taskId);
  }

  public chats(chatId: (string | null) = null): Chats {
    return new Chats(this, chatId);
  }

  public teams(chatId: (string | null) = null): Teams {
    return new Teams(this, chatId);
  }

  public notes(noteId: (string | null) = null): Notes {
    return new Notes(this, noteId);
  }

  public files(): Files {
    return new Files(this);
  }

  public groups(groupId: (string | null) = null): Groups {
    return new Groups(this, groupId);
  }

  public recent(): Recent {
    return new Recent(this);
  }

  public events(eventId: (string | null) = null): Events {
    return new Events(this, eventId);
  }

  public persons(personId: (string | null) = null): Persons {
    return new Persons(this, personId);
  }

  public webhooks(webhookId: (string | null) = null): Webhooks {
    return new Webhooks(this, webhookId);
  }

  public everyone(): Everyone {
    return new Everyone(this);
  }

  public companies(companyId: (string | null) = null): Companies {
    return new Companies(this, companyId);
  }

  public favorites(): Favorites {
    return new Favorites(this);
  }

  public dataExport(taskId: (string | null) = null): DataExport {
    return new DataExport(this, taskId);
  }

  public conversations(chatId: (string | null) = null): Conversations {
    return new Conversations(this, chatId);
  }

  public adaptiveCards(cardId: (string | null) = null): AdaptiveCards {
    return new AdaptiveCards(this, cardId);
  }
}
export default Index;
