import Bridges from './Bridges';
import Account from './Account';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/v2`;
  }

  account(accountId: (string | null) = null): Account {
    return new Account(this, accountId);
  }

  bridges(bridgeId: (string | null) = null): Bridges {
    return new Bridges(this, bridgeId);
  }
}
export default Index;
