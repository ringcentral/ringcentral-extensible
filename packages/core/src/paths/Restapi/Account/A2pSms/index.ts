import OptOuts from './OptOuts';
import Statuses from './Statuses';
import Messages from './Messages';
import Batches from './Batches';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/a2p-sms`;
  }

  public batches(batchId: (string | null) = null): Batches {
    return new Batches(this, batchId);
  }

  public messages(messageId: (string | null) = null): Messages {
    return new Messages(this, messageId);
  }

  public statuses(): Statuses {
    return new Statuses(this);
  }

  public optOuts(): OptOuts {
    return new OptOuts(this);
  }
}
export default Index;
