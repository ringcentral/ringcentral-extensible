import Webhooks from './Webhooks';
import Events from './Events';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/groups`;
  }

  events(): Events {
    return new Events(this);
  }

  webhooks(): Webhooks {
    return new Webhooks(this);
  }
}
export default Index;
