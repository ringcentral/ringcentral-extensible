import Subscriptions from './Subscriptions';
import { RingCentralInterface, ParentInterface } from '../../../../types';

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

  subscriptions(subscriptionId: (string | null) = null): Subscriptions {
    return new Subscriptions(this, subscriptionId);
  }
}
export default Index;
