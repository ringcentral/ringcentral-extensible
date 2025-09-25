import AdaptiveCards from "./AdaptiveCards/index.js";
import Conversations from "./Conversations/index.js";
import DataExport from "./DataExport/index.js";
import Favorites from "./Favorites/index.js";
import Companies from "./Companies/index.js";
import Everyone from "./Everyone/index.js";
import Webhooks from "./Webhooks/index.js";
import Persons from "./Persons/index.js";
import Events from "./Events/index.js";
import Recent from "./Recent/index.js";
import Groups from "./Groups/index.js";
import Files from "./Files/index.js";
import Tasks from "./Tasks/index.js";
import Notes from "./Notes/index.js";
import Teams from "./Teams/index.js";
import Chats from "./Chats/index.js";
import { ParentInterface, RingCentralInterface } from "../../../types.js";

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

  public chats(chatId: string | null = null): Chats {
    return new Chats(this, chatId);
  }

  public teams(chatId: string | null = null): Teams {
    return new Teams(this, chatId);
  }

  public notes(noteId: string | null = null): Notes {
    return new Notes(this, noteId);
  }

  public tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }

  public files(): Files {
    return new Files(this);
  }

  public groups(groupId: string | null = null): Groups {
    return new Groups(this, groupId);
  }

  public recent(): Recent {
    return new Recent(this);
  }

  public events(eventId: string | null = null): Events {
    return new Events(this, eventId);
  }

  public persons(personId: string | null = null): Persons {
    return new Persons(this, personId);
  }

  public webhooks(webhookId: string | null = null): Webhooks {
    return new Webhooks(this, webhookId);
  }

  public everyone(): Everyone {
    return new Everyone(this);
  }

  public companies(companyId: string | null = null): Companies {
    return new Companies(this, companyId);
  }

  public favorites(): Favorites {
    return new Favorites(this);
  }

  public dataExport(taskId: string | null = null): DataExport {
    return new DataExport(this, taskId);
  }

  public conversations(chatId: string | null = null): Conversations {
    return new Conversations(this, chatId);
  }

  public adaptiveCards(cardId: string | null = null): AdaptiveCards {
    return new AdaptiveCards(this, cardId);
  }
}
export default Index;
