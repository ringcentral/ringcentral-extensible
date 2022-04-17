import Statuses from './Statuses';
import OptOuts from './OptOuts';
import Messages from './Messages';
import Batches from './Batches';
import Parent from '..';
import { RingCentral } from '../../../..';

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

  batches(batchId: string | null = null): Batches {
    return new Batches(this, batchId);
  }

  messages(messageId: string | null = null): Messages {
    return new Messages(this, messageId);
  }

  optOuts(): OptOuts {
    return new OptOuts(this);
  }

  statuses(): Statuses {
    return new Statuses(this);
  }
}
export default Index;
