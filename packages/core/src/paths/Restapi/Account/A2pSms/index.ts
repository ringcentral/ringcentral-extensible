import Statuses from './Statuses';
import OptOuts from './OptOuts';
import Messages from './Messages';
import Batches from './Batches';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/a2p-sms`;
  }

  batches(batchId: (string | null) = null): Batches {
    return new Batches(this, batchId);
  }

  messages(messageId: (string | null) = null): Messages {
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
