import OptOuts from './OptOuts';
import Messages from './Messages';
import Batch from './Batch';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/a2p-sms`;
  }

  batch(batchId: string | null = null): Batch {
    return new Batch(this, batchId);
  }

  messages(messageId: string | null = null): Messages {
    return new Messages(this, messageId);
  }

  optOuts(): OptOuts {
    return new OptOuts(this);
  }
}
export default Index;
